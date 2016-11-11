@crates.each do |crate|
  json.set! crate.id do
    json.id crate.id
    json.name crate.name
    json.albumIds crate.album_id_array_remove(@id)
  end
end
