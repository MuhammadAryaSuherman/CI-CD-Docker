# Gunakan image Node.js
FROM node:lts-alpine3.17

# Buat direktori app
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin semua file lainnya
COPY . .

# Expose port yang digunakan oleh aplikasi Anda (misalnya, 3000)
EXPOSE 3000

# Jalankan aplikasi
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && node app.js"]
