@crates.each do |crate|
    json.partial! 'api/cratings/crating', crating: crating
end
