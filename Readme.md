# Membuat ToDoList 

Kali ini saya membuat ToDoList App dengan MySQL + Express + VueJS + NodeJS

Sebelum menjalankan App nya pastikan dulu database mysql telah di buat dengan nama database sesuai dengan db.js

### configurasi
konfigurasi pada terminal target folder utama untuk membuat package,json

```sh
npm init
npm i body-parser cors express mysql2 nodemon sequelize
```

lalu ini konfigurasi untuk frontend menggunakan vue.js

```sh
npm install -g @vue/cli-init

vue init webpack client
```

untuk menjalankan aplikasinya , run port masing masing frontend dan backend

cek di package.json backend (target endpoint terminal pada folder utama)

```sh
npm run start
```
 
 lalu cek di package.json frontend (target endpoint terminal pada client)
 ```sh
npm run dev
 ```
![1](https://user-images.githubusercontent.com/56714457/78108513-c2d98700-7421-11ea-8ff9-a764e3fb0376.png)

![2](https://user-images.githubusercontent.com/56714457/78108583-e4d30980-7421-11ea-9f57-714364c6bebf.png)

 
