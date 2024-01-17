const express = require("express");
const fs = require("fs");
const axios = require("axios");
const path = require("path");
const url = require("url");

async function downloadURLs(filename) {
    try {
        // reads file
        const fileContent = fs.readFileSync(filename, "utf-8");
        const urls = fileContent.split(/\r?\n/);

        // process each url
        for (let u of urls) {
            if (!u.trim()) continue; // skip empty lines
            try {
                // http get req
                const response = await axios.get(u);
                const hostname = new URL(u).hostname;

                // write to file
                fs.writeFileSync(`${hostname}`, response.data);
                console.log(`Wrote to ${hostname}`);
            } catch (err) {
                console.error(`Could not download ${u}`);
            }
        }
    } catch (err) {
        console.error(`Error reading file '${filename}': ${err.message}`);
        process.exit(1);
    }
}

// get the filename from the command line arguments
const filename = process.argv[2];

if (!filename) {
    console.log("Usage: node urls.js Filename");
    process.exit(1);
}

downloadURLs(filename);
