# Encontre os IDs dos contêineres que estão usando a porta 3000
CONTAINER_IDS=$(sudo docker ps -q --filter "ancestor=your_image_name")

# Parar cada contêiner encontrado
for CONTAINER_ID in $CONTAINER_IDS; do
    sudo docker stop $CONTAINER_ID
done
