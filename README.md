# Lixware

> Note: The guids below are for Linux

### Installation
**prerequisits**
* git
* nodejs
* sqlite3

**1. Clone the repo**
```
# HTTPS
git clone https://github.com/hayook/lixware.git

# SSH
git clone git@github.com:hayook/lixware.git
```

**2. Install dependencies**
```
lixware/
$ npm install
```

**3. Create a `.env.local` file**
```
lixware/
$ echo "DB=\"./db/lixware.db\"" > .env.local
```

## Run in development
**1. Installation**

**2. Initialize the database**
```
lixware/db/
$ ./scripts/init.sh
```

**3. Start the development server**
```
lixware/
$ npm run dev
```

## Deployment
There are many ways to build a Nextjs app, one simple way is the standalone app, the result is a `server.js` file with the necessary files, as if it's an Expressjs app. For the other options check [Nextjs docs](https://www.nextjs.org) and [this video](https://www.youtube.com/watch?v=wIkn3aG3rr8)

**1. Update the `next.config.mjs` file**
```
// ...
const nextConfig = {
	output: "standalone"
};
// ...
```
**2. Run the build command**
```
lixware/
$ npm run build
```

**3. Copy the missing files**
```
lixware/
$ cp .env.local .next/standalone/
$ cp -r .next/static/ .next/standalone/.next/
$ mkdir .next/standalone/db
$ cp -r ./db/scripts/ .next/standalone/db/
```

**4. Initialize the production database**
```
lixware/.next/static/ .next/standalone/db/
$ ./scripts/init.sh
```

**5. Start the server**
```
lixware/.next/static/ .next/standalone/
$ node ./server.js
```
