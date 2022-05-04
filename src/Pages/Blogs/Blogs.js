import React from 'react';

function Blogs() {
    return (
        <div className='m-5 px-5 '>
            <h3>1. Difference between Javascript and Node.js</h3>
            <h5>Javascript হল একটি programming language এবং Node js  হলে একটি javascript runtime environment বা javascript run করার পরিবেশ যা javascript run করায়। javascript মূলত frontend এ use হয় আর node js সাধারণত backend এর কাজে use হয় । Node js ছাড়া javascript browser এর বাইরে চলতে পারেনা । Javascript DOM এর সাথে  contact করতে সক্ষম যা node js করতে পারেনা। Javascript যে কোন browser এর  engine এ run করতে পারে। node js লিখা হয়েছে C, C++ এবং javascript দিয়ে। </h5>
            <h3>2. Difference Between SQL and NoSQL database</h3>
            <h5>Sql database এর একটি নিদ্রিষ্ট বা পূর্বনির্ধারিত পরিকল্পনা (schema)আছে। অন্যদিকে NoSql database dynamic schema use করে।  Sql খুব বেশি complex query এর বেশি উপযোগী। অন্যদিকে noSql database complex query এর জন্য উপযোগী নয়। nosql database json type এর data এর জন্য বেশি উপযোগী।  sql database table আকারে থাকে । Sql database সারি বরাবর মাপযোগ্য ।   </h5>

        </div>
    )
}

export default Blogs;
