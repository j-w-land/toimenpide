const express = require('express');
const mysql = require('mysql');

// Create Connection
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'Helsinki',
    database    : 'toimenpiteet_db'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('toimenpiteet_db yhdistetty');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => { 
    let sql = 'CREATE DATABASE toimenpiteet_db';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database luotu..');
    });
});

// Create table
app.get('/create_tptable', (req, res) => {
    let sql = 'CREATE TABLE tptable(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('tp_table taulukko luotu');
    });
});

// Insert post 1 into table
app.get('/addpost1', (req, res) =>{
    let post = {title:'Post 1', body: 'This is post #1'};
    let sql = 'INSERT INTO tptable SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added..');
    });
});

// Insert post 2 into table
app.get('/addpost2', (req, res) =>{
    let post = {title:'Post 2', body: 'This is post #2'};
    let sql = 'INSERT INTO tptable SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added..');
    });
});

// Select posts
app.get('/getposts', (req, res) =>{
    let sql = 'SELECT * FROM tptable';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched..');
    });
});

// Select single post
app.get('/getpost/:id', (req, res) =>{
    let sql = `SELECT * FROM tptable WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched..');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) =>{
    let = newTitle = 'Updated Title';
    let sql = `UPDATE tptable SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated..');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) =>{
    let = newTitle = 'Updated Title';
    let sql = `DELETE FROM tptable WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted..');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});