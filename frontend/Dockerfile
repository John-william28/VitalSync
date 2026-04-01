FROM nginx:alpine

# Copier la config Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers statiques
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]