json.status @status.status
json.status_id @status.id
json.(@album, :id, :title, :artist, :year, :description, :image_url)
