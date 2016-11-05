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

Album.create!(title: "Ambient 1: Music for Airports",
             artist: "Brian Eno",
             year: "1978",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478274120/music-for-airports-550_iylvza.jpg",
             description:
             "Four subtle, slowly evolving pieces grace Eno's first conscious effort at creating ambient music.")

Album.create!(title: "Madvillainy",
             artist: "Madvillain",
             year: "2004",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478274119/madvillainy_eosbse.jpg",
             description:
             "Twenty-two short and blunted tracks bang out mythical stories of villains and urban (anti) heroes trying to make it through with their ganja and wits still intact -- each flows together in a comic book fashion sometimes segued with vignettes sampled from 1940s movies and broadcasts or left-field marjuana-toting skits.")

Album.create!(title: "Selected Ambient Works: 85-92",
             artist: "Aphex Twin",
             year: "1992",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478274119/aphex-twin_lb5zyg.jpg",
             description:
             "One of the indisputable classics of electronica, and a defining document for ambient music in particular, SELECTED AMBIENT WORKS 85-92 is one of Aphex Twin's (AKA Richard D. James) earliest and most fully realized achievements.")

Album.create!(title: "Grab That Gun",
             artist: "The Organ",
             year: "2004",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372679/the_organ_o4y5pc.jpg",
             description:
             "While this sound comes from the legacy of '80s college rock -- at times suggesting a fusion of the Smiths' witty, bouncy melancholy and the on-the-sleeve passion of Throwing Muses -- and also has ties to some of the other bands remaking new wave and post-punk in their own images, the Organ and Grab That Gun have a freshness that isn't often heard in any kind of rock music.")

Album.create!(title: "Good Kid, M.A.A.D. City",
             artist: "Kendrick Lamar",
             year: "2012",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372680/kendrick_dmqere.jpg",
             description:
             "This journey through the concrete jungle of Compton is worth taking because of the artistic richness within, plus the attraction of a whip-smart rapper flying high during his rookie season. Any hesitation about the horror of it all is quickly wiped away by Kendrick's mix of true talk, open heart, open mind, and extended hand.")

Album.create!(title: "Coming Home",
             artist: "Leon Bridges",
             year: "2015",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372681/leonbridges_oyzyxg.jpg",
             description:
             "Here's Leon Bridges. He was born in 1989. The singer, songwriter, and guitarist takes it back to the early '60s, slightly earlier than the majority of soul-rooted artists, including labelmates Raphael Saadiq, who have favored a vintage approach over a contemporary one.")

Album.create!(title: "Moondance",
             artist: "Van Morrison",
             year: "1970",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372681/van-morrison-Moondance_bqqly7.jpg",
             description:
             "The yang to Astral Weeks' yin, the brilliant Moondance is every bit as much a classic as its predecessor; Van Morrison's first commercially successful solo effort, it retains the previous album's deeply spiritual thrust but transcends its bleak, cathartic intensity to instead explore themes of renewal and redemption.")

Album.create!(title: "Masters of the Universe",
             artist: "Binary Star",
             year: "2000",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_300/v1478372679/binarystar_jqawok.jpg",
             description:
             "Any lucky owner of Binary Star's limited-distribution pressing of the 1999 LP Waterworld would already be familiar with most of the material on Masters of the Universe. It has everything a great hip-hop album requires, with varied beats, differing rhyme deliveries, and content you'll find yourself thinking about long after it's been said.")

Album.create!(title: "Vespertine",
             artist: "Björk",
             year: "2001",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372680/vespertine_nfkyhf.jpg",
             description:
             "Described by Björk as \"about being on your own in your house with your laptop and whispering for a year and just writing a very peaceful song that tiptoes,\" Vespertine's vocals seldom rise above a whisper, the rhythms mimic heartbeats and breathing, and a pristine, music-box delicacy unites the album into a deceptively fragile, hypnotic whole.")

Album.create!(title: "Lunatic Harness",
             artist: "µ-Ziq",
             year: "1997",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372680/muziq_usjkcp.jpg",
             description:
             "Mike Paradinas' first success story from the frontlines of ambient/electro/drum'n'bass experimentation comes via his second attempt, Lunatic Harness. Following the brief but for the most part uninteresting toy-box chop-up of 1996's Urmur Bile Trax, the album escapes the mire of noncommittal cheekiness by returning to early releases such as Tango N' Vectif and Bluff Limbo for inspiration, fusing pretty, affecting melodies and dynamic ambient atmospheres with beats that manage a tight balance between structured groove and complete chaos.")

Album.create!(title: "Super Tight",
             artist: "UGK",
             year: "1994",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372680/ugk_y9tqgp.jpg",
             description:
             "UGK's third release smoothed out some of the rough edges of their earlier efforts without even coming close to selling out, something that not only landed them in the Billboard 200 album chart for the first time but solidified their status as the leaders of Texas hip-hop.")

Album.create!(title: "The Lost Tapes",
             artist: "Nas",
             year: "1992",
             image_url: "http://res.cloudinary.com/jcbalcita/image/upload/v1478372680/losttapes_pqkzsq.jpg",
             description:
             "Leading up to the release of God's Son, the second new Nas album in less than a year, Ill Will dropped a collection of \"lost recordings\" -- basically, tracks recorded for I Am and Stillmatic that just didn't make it. No cameos. No hype. No BS.s")




AlbumStatus.create!(user_id: 1, album_id: 1, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 2, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 3, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 4, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 5, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 6, status: "wishlist")
AlbumStatus.create!(user_id: 2, album_id: 16, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 18, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 17, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 15, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 10, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 13, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 12, status: "wishlist")
AlbumStatus.create!(user_id: 2, album_id: 11, status: "want to listen")
