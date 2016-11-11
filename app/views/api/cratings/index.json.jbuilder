@crates.each do |crate|
    json.partial! 'api/cratings/crating', crate: crate
end
