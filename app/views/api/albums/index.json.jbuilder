json.albums do
  @albums.each do |album|
    json.set! album.id, album
  end
end
json.set! :specificRender, @render
json.set! :crateRender, @crate_name
