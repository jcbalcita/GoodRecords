# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "username", password: "password")


Album.create!(title: "Aquemini",
             artist: "Outkast",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478211029/5839018_hjmfwg.jpg",
             year: "1998",
             description:
             "Even compared to their already excellent and forward-looking catalog, OutKast's sprawling third album, Aquemini, was a stroke of brilliance. The chilled-out space-funk of ATLiens had already thrown some fans for a loop, and Aquemini made it clear that its predecessor was no detour, but a stepping stone for even greater ambitions.")

Album.create!(title: "Bee Thousand",
             artist: "Guided By Voices",
             year: "1994",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478211031/Bee-Thousand-640x640_utmg7l.png",
             description:
             "The cult of indie rock thrives on the unexpected discovery, and in 1994 Guided by Voices were just the sort of musical phenomenon no one figured was still out there -- 30-something rock obsessives cranking out fractured guitar-driven pop tunes in a laundry room.")

Album.create!(title: "The Stone Roses",
             artist: "The Stone Roses",
             year: "1989",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478211030/stone_roses_i4brss.jpg",
             description:
             "Even compared to their already excellent and forward-looking catalog, OutKast's sprawling third album, Aquemini, was a stroke of brilliance. The chilled-out space-funk of ATLiens had already thrown some fans for a loop, and Aquemini made it clear that its predecessor was no detour, but a stepping stone for even greater ambitions.")

Album.create!(title: "Boy in da Corner",
             artist: "Dizzee Rascal",
             year: "2004",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478212059/dizzee_rascal_boy_in_da_corner_py6gld.jpg",
             description: "Get lost in the swaying chime melody of \"Brand New Day,\" the low-slung industrial-punk grind of \"Jus a Rascal,\" or the stunted gait of \"Do It,\" and risk missing out on all of the deeply hidden inflections that help make the whole album so unique. Despite the grime, the violence, the conflicted romantic entanglements, and the jagged productions that characterize the album, the moment that hits hardest is also the most fragile.")

Album.create!(title: "The Campfire Headphase",
             artist: "Boards of Canada",
             year: "2005",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478212294/campfire1_nn14k3.jpg",
             description:
             "Just their third missive in the past seven years, The Campfire Headphase displays Boards of Canada changing few of their methods but more of their sounds. The key difference between this record and its predecessors is the advent of unprocessed, recognizable guitars (a small heresy to portions of their fanbase).")

Album.create!(title: "22, A Million",
             artist: "Bon Iver",
             year: "2016",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478212240/mi0004108722-a8d78931-79be-44dd-899b-17b6291dee45_gre6aw.jpg",
             description:
             "22, A Million is a complicated and intricate record that features chopped-up lyrics, altered vocals, sped-up samples, alternately shimmering and clipped keyboards, treated saxophones, and the occasional gently strummed guitar.")
