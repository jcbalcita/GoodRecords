@cratings.each do |crating|
  json.set! crating.id do
    json.id crating.id
    json.crate crating.crate
  end
end
