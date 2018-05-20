### MongoDB

* MongoDB is a database management system designed to rapidly develop web applications and internet        infrastructure.
* NoSQL Document Oriented database
* Documents are created and stored in BSON files, Binary JSON (JavaScript Object Notation) format
* One of the top benefits offered by MongoDB is the use of dynamic schemas that eliminates the need to pre-define the structure, like fields or value types. 
* Such model allows hierarchical relationships representation, array storage, and ability to change the records structure by simply adding or deleting fields. 
* This NoSQL solution comes with embedding, auto-sharding, and on-board replication for better scalability and high availability.
* The ability to cope with large and unstructured amounts of data.[scaling]

### Schema Design

#### Modeling One-to-Few

Eg:Embedding
```javascript
> db.person.findOne()
{
  name: 'Kate Monster',
  ssn: '123-456-7890',
  addresses : [
     { street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
     { street: '123 Avenue Q', city: 'New York', cc: 'USA' }
  ]
}
```

* The main advantage is that you don’t have to perform a separate query to get the embedded details.
* The main disadvantage is that you have no way of accessing the embedded details as stand-alone entities.

#### One-to-Many

Eg:child referencing
```javascript
> db.products.findOne()
{
    name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [     // array of references to Part documents
        ObjectID('AAAA'),    // reference to the #4 grommet above
        ObjectID('F17C'),    // reference to a different Part
        ObjectID('D2AA'),
        // etc
    ]
}
```

* Each Product would have its own document, which would contain an array of ObjectID references to the Parts that make up that Product

Eg:
```javascript
> db.parts.findOne()
{
    _id : ObjectID('AAAA'),
    partno : '123-aff-456',
    name : '#4 grommet',
    qty: 94,
    cost: 0.94,
    price: 3.99
}
```
* Each Part would have its own document
* You would then use an application-level join to retrieve the parts for a particular product
```javascript
// Fetch the Product document identified by this catalog number
> product = db.products.findOne({catalog_number: 1234});
   // Fetch all the Parts that are linked to this Product
> product_parts = db.parts.find({_id: { $in : product.parts } } ).toArray() ;
```
* For efficient operation, you’d need to have an index on ‘products.catalog_number’. Note that there will always be an index on ‘parts._id’, so that query will always be efficient.
* Each Part is a stand-alone document, so it’s easy to search them and update them independently.
* One trade off for using this schema is having to perform a second query to get details about the Parts for a Product.
* As an added bonus, this schema lets you have individual Parts used by multiple Products, so your One-to-N schema just became an N-to-N schema without any need for a join table!

#### One to Squillions

An example of “one-to-squillions” might be an event logging system that collects log messages for different machines. Any given host could generate enough messages to overflow the 16 MB document size, even if all you stored in the array was the ObjectID. This is the classic use case for “parent-referencing” – you’d have a document for the host, and then store the ObjectID of the host in the documents for the log messages.

Eg:parent referencing
```javascript
> db.hosts.findOne()
{
    _id : ObjectID('AAAB'),
    name : 'goofy.example.com',
    ipaddr : '127.66.66.66'
}

>db.logmsg.findOne()
{
    time : ISODate("2014-03-28T09:42:41.382Z"),
    message : 'cpu is on fire!',
    host: ObjectID('AAAB')       // Reference to the Host document
}
```

```javascript
 // find the parent ‘host’ document
> host = db.hosts.findOne({ipaddr : '127.66.66.66'});  // assumes unique index
   // find the most recent 5000 log message documents linked to that host
> last_5k_msg = db.logmsg.find({host: host._id}).sort({time : -1}).limit(5000).toArray()
```

So, even at this basic level, there is more to think about when designing a MongoDB schema than when designing a comparable relational schema. You need to consider two factors:

* Will the entities on the “N” side of the One-to-N ever need to stand alone?
* What is the cardinality of the relationship: is it one-to-few; one-to-many; or one-to-squillions?

Based on these factors, you can pick one of the three basic One-to-N schema designs:

* Embed the N side if the cardinality is one-to-few and there is no need to access the embedded object outside the context of the parent object
* Use an array of references to the N-side objects if the cardinality is one-to-many or if the N-side objects should stand alone for any reasons
* Use a reference to the One-side in the N-side objects if the cardinality is one-to-squillions