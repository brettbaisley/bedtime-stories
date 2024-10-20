# Bedtime Stories AI

 Open Terminal
 ```sh
 cd dev/repos
 mkdir bedtime-stories
 cd bedtime-stories
```
Initialize git
```sh
git init
```

Create the React front-end
```sh
npx create-react-app frontend
```

Create the Azure Functions back-end in Python
```sh
func init api --python
cd api
func new
```



## To Run Local Delopment
1. Start the front-end
```sh
cd frontend
npm start
```

2. Start the back-end
```sh
cd api
func start
```

3. Start the SWA Proxy
```sh
swa start http://localhost:3000 --api-location ./api
```

4. Open the browser
Go to: http://localhost:4280