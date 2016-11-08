# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Guest", password: "password")
User.create!(username: "user", password: "password")

Album.create!(title: "Aquemini",
             artist: "Outkast",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478211029/5839018_hjmfwg.jpg",
             year: "1998",
             description:
             "Even compared to their already excellent and forward-looking catalog, OutKast's sprawling third album, Aquemini, was a stroke of brilliance. The chilled-out space-funk of ATLiens had already thrown some fans for a loop, and Aquemini made it clear that its predecessor was no detour, but a stepping stone for even greater ambitions.")

Album.create!(title: "Bee Thousand",
             artist: "Guided By Voices",
             year: "1994",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478211031/Bee-Thousand-640x640_utmg7l.png",
             description:
             "The cult of indie rock thrives on the unexpected discovery, and in 1994 Guided by Voices were just the sort of musical phenomenon no one figured was still out there -- 30-something rock obsessives cranking out fractured guitar-driven pop tunes in a laundry room.")

Album.create!(title: "The Stone Roses",
             artist: "The Stone Roses",
             year: "1989",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478211030/stone_roses_i4brss.jpg",
             description:
             "Since the Stone Roses were the nominal leaders of Britain's \"Madchester\" scene -- an indie rock phenomenon that fused guitar pop with drug-fueled rave and dance culture -- it's rather ironic that their eponymous debut only hints at dance music. What made the Stone Roses important was how they welcomed dance and pop together, treating them as if they were the same beast.")

Album.create!(title: "Boy in da Corner",
             artist: "Dizzee Rascal",
             year: "2004",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478212059/dizzee_rascal_boy_in_da_corner_py6gld.jpg",
             description: "Get lost in the swaying chime melody of \"Brand New Day,\" the low-slung industrial-punk grind of \"Jus a Rascal,\" or the stunted gait of \"Do It,\" and risk missing out on all of the deeply hidden inflections that help make the whole album so unique. Despite the grime, the violence, the conflicted romantic entanglements, and the jagged productions that characterize the album, the moment that hits hardest is also the most fragile.")

Album.create!(title: "The Campfire Headphase",
             artist: "Boards of Canada",
             year: "2005",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478212294/campfire1_nn14k3.jpg",
             description:
             "Just their third missive in the past seven years, The Campfire Headphase displays Boards of Canada changing few of their methods but more of their sounds. The key difference between this record and its predecessors is the advent of unprocessed, recognizable guitars (a small heresy to portions of their fanbase).")

Album.create!(title: "22, A Million",
             artist: "Bon Iver",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478212240/mi0004108722-a8d78931-79be-44dd-899b-17b6291dee45_gre6aw.jpg",
             description:
             "22, A Million is a complicated and intricate record that features chopped-up lyrics, altered vocals, sped-up samples, alternately shimmering and clipped keyboards, treated saxophones, and the occasional gently strummed guitar.")

Album.create!(title: "Ambient 1: Music for Airports",
             artist: "Brian Eno",
             year: "1978",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478274120/music-for-airports-550_iylvza.jpg",
             description:
             "Four subtle, slowly evolving pieces grace Eno's first conscious effort at creating ambient music.")

Album.create!(title: "Madvillainy",
             artist: "Madvillain",
             year: "2004",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478274119/madvillainy_eosbse.jpg",
             description:
             "Twenty-two short and blunted tracks bang out mythical stories of villains and urban (anti) heroes trying to make it through with their ganja and wits still intact -- each flows together in a comic book fashion sometimes segued with vignettes sampled from 1940s movies and broadcasts or left-field marjuana-toting skits.")

Album.create!(title: "Selected Ambient Works: 85-92",
             artist: "Aphex Twin",
             year: "1992",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478274119/aphex-twin_lb5zyg.jpg",
             description:
             "One of the indisputable classics of electronica, and a defining document for ambient music in particular, SELECTED AMBIENT WORKS 85-92 is one of Aphex Twin's (AKA Richard D. James) earliest and most fully realized achievements.")

Album.create!(title: "Grab That Gun",
             artist: "The Organ",
             year: "2004",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372679/the_organ_o4y5pc.jpg",
             description:
             "While this sound comes from the legacy of '80s college rock -- at times suggesting a fusion of the Smiths' witty, bouncy melancholy and the on-the-sleeve passion of Throwing Muses -- and also has ties to some of the other bands remaking new wave and post-punk in their own images, the Organ and Grab That Gun have a freshness that isn't often heard in any kind of rock music.")

Album.create!(title: "Good Kid, M.A.A.D. City",
             artist: "Kendrick Lamar",
             year: "2012",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372680/kendrick_dmqere.jpg",
             description:
             "This journey through the concrete jungle of Compton is worth taking because of the artistic richness within, plus the attraction of a whip-smart rapper flying high during his rookie season. Any hesitation about the horror of it all is quickly wiped away by Kendrick's mix of true talk, open heart, open mind, and extended hand.")

Album.create!(title: "Coming Home",
             artist: "Leon Bridges",
             year: "2015",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372681/leonbridges_oyzyxg.jpg",
             description:
             "Here's Leon Bridges. He was born in 1989. The singer, songwriter, and guitarist takes it back to the early '60s, slightly earlier than the majority of soul-rooted artists, including labelmates Raphael Saadiq, who have favored a vintage approach over a contemporary one.")

Album.create!(title: "Moondance",
             artist: "Van Morrison",
             year: "1970",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372681/van-morrison-Moondance_bqqly7.jpg",
             description:
             "The yang to Astral Weeks' yin, the brilliant Moondance is every bit as much a classic as its predecessor; Van Morrison's first commercially successful solo effort, it retains the previous album's deeply spiritual thrust but transcends its bleak, cathartic intensity to instead explore themes of renewal and redemption.")

Album.create!(title: "Masters of the Universe",
             artist: "Binary Star",
             year: "2000",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_300/v1478372679/binarystar_jqawok.jpg",
             description:
             "Any lucky owner of Binary Star's limited-distribution pressing of the 1999 LP Waterworld would already be familiar with most of the material on Masters of the Universe. It has everything a great hip-hop album requires, with varied beats, differing rhyme deliveries, and content you'll find yourself thinking about long after it's been said.")

Album.create!(title: "Vespertine",
             artist: "Björk",
             year: "2001",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372680/vespertine_nfkyhf.jpg",
             description:
             "Described by Björk as \"about being on your own in your house with your laptop and whispering for a year and just writing a very peaceful song that tiptoes,\" Vespertine's vocals seldom rise above a whisper, the rhythms mimic heartbeats and breathing, and a pristine, music-box delicacy unites the album into a deceptively fragile, hypnotic whole.")

Album.create!(title: "Lunatic Harness",
             artist: "µ-Ziq",
             year: "1997",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372680/muziq_usjkcp.jpg",
             description:
             "Mike Paradinas' first success story from the frontlines of ambient/electro/drum'n'bass experimentation comes via his second attempt, Lunatic Harness. Following the brief but for the most part uninteresting toy-box chop-up of 1996's Urmur Bile Trax, the album escapes the mire of noncommittal cheekiness by returning to early releases such as Tango N' Vectif and Bluff Limbo for inspiration, fusing pretty, affecting melodies and dynamic ambient atmospheres with beats that manage a tight balance between structured groove and complete chaos.")

Album.create!(title: "Super Tight",
             artist: "UGK",
             year: "1994",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372680/ugk_y9tqgp.jpg",
             description:
             "UGK's third release smoothed out some of the rough edges of their earlier efforts without even coming close to selling out, something that not only landed them in the Billboard 200 album chart for the first time but solidified their status as the leaders of Texas hip-hop.")

Album.create!(title: "The Lost Tapes",
             artist: "Nas",
             year: "1992",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478372680/losttapes_pqkzsq.jpg",
             description:
             "Leading up to the release of God's Son, the second new Nas album in less than a year, Ill Will dropped a collection of \"lost recordings\" -- basically, tracks recorded for I Am and Stillmatic that just didn't make it. No cameos. No hype. No BS.")

Album.create!(title: "Fool Around",
             artist: "Rachel Sweet",
             year: "1978",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/rachelsweet_lebofa.jpg",
             description:
             "Sweet was fully sweet 16 in 1978, though, and pictures aside, \"the little girl with the big voice,\" as the bosses billed her, lived up to that description. Belting, whooping, pleading, and near-weeping through the speakers, she rides the crest of Liam Sternberg and his Spector-ized production (that feel of a marching brass band keeping warm on a snowy morning), embodying the tough, rowdy sides of Brenda Lee and Wanda Jackson, though not so genre-bound as the latter.")

Album.create!(title: "Still Brazy",
             artist: "YG",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/stillbrazy_v3ozzu.jpg",
             description:
             "Alluring G-Funk and infectious songs of strife are what attracted suburban America to Suge, Snoop, and Dre, and while the Game grows older and Kendrick's music ventures further out, YG offers a West Coast way to keep their heads ringin', and maybe shake something loose in the process.")

Album.create!(title: "Coloring Book",
             artist: "Chance the Rapper",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/coloringbook_oqfavf.jpg",
             description:
             "The first unsigned artist to appear as Saturday Night Live's musical guest, Chance the Rapper continued to buck the system with his 2016 mixtape Coloring Book, a surprise release that dropped as a free download. Don't take that as \"cheap,\" \"half-finished,\" or anything of the sort as this 14-track effort plays out like a major album, with names like Kanye West, Justin Bieber, and Future on the guest list.")

Album.create!(title: "Love Streams",
             artist: "Tim Hecker",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/lovestreams_nrwqay.jpg",
             description:
             "Love Streams is easily Hecker's most accessible work to date, yet it's also one of his most challenging, as it finds him pushing his sound into new directions while he explores the possibilities of the human voice.")

Album.create!(title: "OK Computer",
             artist: "Radiohead",
             year: "1997",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/okcomputer_ys95in.jpg",
             description:
             "Using the textured soundscapes of The Bends as a launching pad, Radiohead delivered another startlingly accomplished set of modern guitar rock with OK Computer. The anthemic guitar heroics present on Pablo Honey and even The Bends are nowhere to be heard here. Radiohead have stripped away many of the obvious elements of guitar rock, creating music that is subtle and textured yet still has the feeling of rock & roll.")

Album.create!(title: "Monk's Music",
             artist: "Thelonious Monk Septet",
             year: "1957",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478394554/monksmusic_wdfym6.jpg",
             description:
             "Monk's Music is often cited as one of the focal points of Thelonious Monk's six-year affiliation (1955-1961) with the Riverside label. Although the original disc clocked in at slightly over 30 minutes, packed into that half hour are not only the introduction of a few of Monk's signature compositions, but also some amazing interactions from the assembled ensemble.")

Album.create!(title: "Louder Than Bombs",
             artist: "The Smiths",
             year: "1987",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/louderthanbombs_ajzwwo.jpg",
             description:
             "A compilation of singles, B-sides, album tracks, and BBC sessions assembled for the American market, Louder Than Bombs is an overlong and unfocused collection that nevertheless boasts a wealth of brilliant material. ")

Album.create!(title: "In the Aeroplane Over the Sea",
             artist: "Neutral Milk Hotel",
             year: "1998",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/neutralmilkhotel_ov3hcv.jpg",
             description:
             "Perhaps best likened to a marching band on an acid trip, Neutral Milk Hotel's second album is another quixotic sonic parade; lo-fi yet lush, impenetrable yet wholly accessible, In the Aeroplane Over the Sea is either the work of a genius or an utter crackpot, with the truth probably falling somewhere in between.")

Album.create!(title: "Loud",
             artist: "Rihanna",
             year: "2010",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407237/rihannaloudcover_ucmtmn.jpg",
             description:
             "Loud would not sound quite so slapdash if it did not follow Good Girl Gone Bad, one of the best pop albums of its decade, and Rated R, one of the most fascinating pop albums of the same time frame. This album, released less than a year after the latter, also has the misfortune of arriving with no fanfare.")

Album.create!(title: "Stranger Things, Vol. 1",
             artist: "Kyle Dixon and Michael Stein",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/stangerthings_dsbca1.jpg",
             description:
             "While the show itself is clear about its influences, its soundtrack manages to do this too, while ultimately culminating as an in-depth and invigorating piece of atmospheric electronic music.")

Album.create!(title: "Lucky Cat",
             artist: "ISAN",
             year: "2001",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/isan_wizun5.jpg",
             description:
             "Long-distance collaborators Antony Ryan and Robin Saville present 11 perfectly fragile slices of electronic tone poetry with Lucky Cat. The cute kitty cat cover is entirely indicative of the gentle, sprightly melodies of the album. Analog synths and keyboards linger patiently in the air as slow-percolating beats rise from the ether and then dissipate.")

Album.create!(title: "Suddenly",
             artist: "Billy Ocean",
             year: "1984",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407238/billyocean_jkxxqe.jpg",
             description:
             "Billy Ocean vaulted into international stardom with this album in 1984. The album peaked at number nine, was on the charts for over a year and a half, and yielded three R&B hits that were all also pop smashes.")

Album.create!(title: "Man or Astro-Man?",
             artist: "Destroy All Astromen!!",
             year: "1994",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407238/manorastroman_pnz3xs.jpg",
             description:
             "Only Man or Astro-man? could incorporate NASA samples into their music and make them sound exciting, with their hypnotic surf rock and infatuation with cheesy, low-grade sci-fi flicks. With Destroy All Astromen!!, their plans of eventually conquering Earth are carried through with this live recording that not only pays tribute to the aforementioned influences, but also to their musical inspirations. ")

Album.create!(title: "Slanted and Enchanted",
             artist: "Pavement",
             year: "1992",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/slantedandenchanted_kfz7d2.jpg",
             description:
             "Two smart young college guys with a bunch of catchy, cryptic songs and a taste for peculiar sonics go into a studio with a showboating older drummer and come out with one of the definitive indie-rock albums. Beneath its coils of raw distortion and screaming-for-the-hell-of-it, Pavement's first full-length disc gets over on the strength of stellar songwriting and ingenious melodicism.")

Album.create!(title: "Loveless",
             artist: "My Bloody Valentine",
             year: "1992",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407237/loveless_fp2qti.jpg",
             description:
             "Isn't Anything was good enough to inspire an entire scene of My Bloody Valentine soundalikes, but Loveless' greatness proved that the band was inimitable. After two painstaking years in the studio and nearly bankrupting their label Creation in the process, the group emerged with their masterpiece, which fulfilled all of the promise of their previous albums.")

Album.create!(title: "Bury Me At Makout Creek",
             artist: "Mitski",
             year: "2016",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407237/burymeatmakeoutcreek_duzt6a.jpg",
             description:
             "Though not necessarily nostalgia, the sound of Bury Me at Makeout Creek is inventive and resourceful in a '90s-indie way. The choruses here soar like power pop, but are subdued by tempo and fidelity, while cheap drum machines are deployed as much for their tone as their rhythm.")

Album.create!(title: "Is This It",
             artist: "The Strokes",
             year: "2001",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478407236/isthisit_iukpj6.jpg",
             description:
             "Blessed and cursed with an enormous amount of hype from the British press, the Strokes prove to be one of the few groups deserving of their glowing reviews.")

Album.create!(title: "Boxer",
             artist: "The National",
             year: "2007",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478408089/TheNational-Boxer_ous7xv.jpg",
             description:
             "The National don't do anything radically different on Boxer, but then again, they don't really need to: their literate, quietly anthemic take on indie rock seemed to have arrived fully formed on their 2001 self-titled debut.")

Album.create!(title: "Donuts",
             artist: "J Dilla",
             year: "2006",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/dilla_czfv1j.jpg",
             description:
             "Donuts was made on a hospital bed and in a home studio, on a stripped-down setup with a stack of vinyl. Released on its maker's 32nd birthday, three days before he passed away, the album has a resonance deeper than anyone could've hoped for or even imagined.")

Album.create!(title: "You're Living All Over Me",
             artist: "Dinosaur Jr.",
             year: "1987",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/dinosaurjr_cunjso.jpg",
             description:
             "A blitzkrieg fusion of hardcore punk, Sonic Youth-style noise freak-outs, heavy metal, and melodic hard rock in the vein of Neil Young, You're Living All Over Me was a turning point in American underground rock & roll.")

Album.create!(title: "Contemporary Movement",
             artist: "Duster",
             year: "2000",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/duster_ywkywb.jpg",
             description:
             "In the context of what's popular in music at the turn of the century, the title of Duster's second full-length, Contemporary Movement, reveals this San Jose band's wry sense of their place in pop/rock's ecosystem. Their often sparse and laconic delivery (especially on tracks like \"Auto-mobile\") guarantees Duster a place outside contemporary music's mainstream. But in a more perfect world there would be at least three radio hits from this, their most accessible release to date.")

Album.create!(title: "Piñata",
             artist: "Freddie Gibbs / Madlib",
             year: "2014",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493004/freddie-gibbs_q0znrg.jpg",
             description:
             "With a delivery that sounds like 2Pac pitched down a notch, and a technical, streetwise proficiency that's Scarface-styled and just as solid, Gary, Indiana rapper Freddie Gibbs is a rare find, but his odd come-up is arguably even more interesting.")

Album.create!(title: "Lonerism",
             artist: "Tame Impala",
             year: "2007",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/lonerism_mboouv.jpg",
             description:
             "Diving headfirst into the realm of pop music, the way Parker uses keyboards to explore more traditional melodies makes the album feel like the McCartney to Innerspeaker's Lennon, blending the familiar with the far out to craft a Revolver-esque psych-pop experience.")

Album.create!(title: "Ronald Dregan: Dreganomics",
             artist: "Mac Dre",
             year: "2004",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/macdre_hc3o2w.jpg",
             description:
             "Mac Dre albums keep comin', faster than the quality would make you believe. Not that Ronald Dregan: Dreganomics is a masterpiece, but if you get a chuckle from the cover, you'll get a chuckle from the lighthearted album -- that being the hood version of \"lighthearted.\"")

Album.create!(title: "Gettin' It (Album Number Ten)",
             artist: "Too Short",
             year: "1996",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/tooshort_f4obqe.jpg",
             description:
             "At the time of its release, Too Short claimed that Gettin' It was his retirement album. If that is indeed the case, he picked the perfect moment to drop out of the hip-hop business -- as the album shows, he's already beginning to border on self-parody.")

Album.create!(title: "Burnin'",
             artist: "The Wailers",
             year: "1973",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/wailers_zmkxqa.jpg",
             description:
             "The Wailers' fourth album overall, Burnin', was their second for Island Records, released only six months after its predecessor, Catch a Fire.")

Album.create!(title: "Anodyne",
             artist: "Uncle Tupelo",
             year: "1993",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/tupelo_aqaxia.jpg",
             description:
             "Uncle Tupelo never struck a finer balance between rock and country than on Anodyne, their major-label debut and parting shot. For all of the ill will undoubtedly simmering throughout these sessions, Jay Farrar and Jeff Tweedy have never before been more attuned to each other musically.")

Album.create!(title: "Awake",
             artist: "Tycho",
             year: "2014",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/tychoawake_ssozfi.jpg",
             description:
             "The variations within Tycho's music have always been subtle, hovering between ambient introspection and more active synth pop and post-rock elements. On Awake, Scott Hansen breaks the mold a bit, crafting a set of songs with more prominent peaks and valleys than his previous work.")

Album.create!(title: "I Can Hear the Heart Beating as One",
             artist: "Yo La Tengo",
             year: "1997",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493007/yolatengo_h146io.jpg",
             description:
             "New Jersey indie rockers Yo La Tengo had already been slowly growing into their sound for over a decade by the 1997 release of their revelational eighth album, I Can Hear the Heart Beating as One. Their guitar-based pop was steadily finding its legs before this, as the band moved toward increasingly dreamy productions on albums like Painful and Electr-O-Pura. The 16 tracks that made up the ambitious and epic I Can Hear the Heart found the group stretching out their whispery vocals and deceptively straightforward pop approach to encompass a variety of unexpected styles.")

Album.create!(title: "Vignetting the Compost",
             artist: "Bibio",
             year: "2009",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478493005/bibio_iqruvl.jpg",
             description:
             "Like Stephen Wilkinson's other Bibio albums, Vignetting the Compost is as literal as it is charming. Blending and transforming parts and pieces so they become a whole is equally vital to making compost and making music, and this is especially true in Bibio's world, where folk meets electronica and recognizable instruments mesh with undefinable but oddly comforting textures and field recordings.")


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


Review.create!(user_id: 1, album_id: 1, body: "Album id 1.", rating: 5)
Review.create!(user_id: 1, album_id: 2, body: "Album id 2.", rating: 5)
Review.create!(user_id: 1, album_id: 3, body: "Album id 3.", rating: 5)
Review.create!(user_id: 1, album_id: 4, body: "Album id 4", rating: 5)
Review.create!(user_id: 1, album_id: 5, body: "Album id 5", rating: 5)
Review.create!(user_id: 1, album_id: 6, body: "Album id 6", rating: 5)
Review.create!(user_id: 1, album_id: 7, body: "Album id 7", rating: 5)
Review.create!(user_id: 1, album_id: 8, body: "Album id 8", rating: 5)
Review.create!(user_id: 1, album_id: 9, body: "Album id 9", rating: 5)
Review.create!(user_id: 1, album_id: 10, body: "Album id 10", rating: 5)
Review.create!(user_id: 1, album_id: 11, body: "Album id 11", rating: 5)
Review.create!(user_id: 1, album_id: 12, body: "Album id 12", rating: 5)
Review.create!(user_id: 1, album_id: 13, body: "Album id 13", rating: 5)
Review.create!(user_id: 1, album_id: 14, body: "Album id 14", rating: 5)
Review.create!(user_id: 1, album_id: 15, body: "Album id 15", rating: 5)
Review.create!(user_id: 1, album_id: 16, body: "Album id 16", rating: 5)
Review.create!(user_id: 1, album_id: 17, body: "Album id 17", rating: 5)
Review.create!(user_id: 1, album_id: 18, body: "Album id 18", rating: 5)
Review.create!(user_id: 1, album_id: 19, body: "Album id 19", rating: 5)
Review.create!(user_id: 1, album_id: 20, body: "Album id 20", rating: 5)

Review.create!(user_id: 2, album_id: 1, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 2, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 3, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 4, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 5, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 6, body: "I hate this album.", rating: 1)
Review.create!(user_id: 2, album_id: 7, body: "I hate this album.", rating: 1)
