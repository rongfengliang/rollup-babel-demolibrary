FROM fholzer/nginx-brotli:v1.14.0
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html
COPY app.js /usr/share/nginx/html/app.js
EXPOSE 80
