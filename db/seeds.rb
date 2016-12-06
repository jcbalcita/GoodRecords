# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Guest", password: "password")
User.create!(username: "johncarlo", password: "raptor")
User.create!(username: "hatersball", password: "ilove2hate")

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
             year: "2002",
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

Album.create!(title: "Bury Me At Makeout Creek",
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

Album.create!(title: "American Water",
             artist: "Silver Jews",
             year: "1998",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672412/silverjews_pvn4vx.png",
             description:
             "As with all of the Jews' best work, American Water sounds like it was made for the band's own enjoyment, and the listener is just eavesdropping on their fun.")

Album.create!(title: "Black on Both Sides",
             artist: "Mos Def",
             year: "1999",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672192/bobs_btfb3u.jpg",
             description:
             "Black on Both Sides is a tour de force by an artist out to prove he can do it all. Its ambition and execution rank it as one of the best albums of 1999, and it consolidates Mos Def's position as one of hip-hop's brightest hopes entering the 21st century.")

Album.create!(title: "7 Days of Funk",
             artist: "Dâm-Funk / Snoop Dogg",
             year: "2013",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672192/sevendaysfunk_kodpel.jpg",
             description:
             "Even after a trip to Jamaica changed his life forever and gave him the permanent name change to Snoop Lion, veteran rapper Snoop Dogg leaves the rasta lifestyle behind and becomes Snoopzilla for 7 Days of Funk, a nostalgic project with modern funkateer Dâm-Funk.")

Album.create!(title: "Dissolver",
             artist: "Iran",
             year: "2009",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672191/iran_lmxwia.jpg",
             description:
             "Nearly six years passed between Aaron Aites' second noise pop opus as Iran, The Moon Boys, and Dissolver, during which time guitarist Kyp Malone became a member of one of the most acclaimed bands of the 2000s, TV on the Radio. Maybe that's why Dissolver strips away most of the confrontational side of Iran's music in favor of the pop that was underneath the noise all along.")

Album.create!(title: "Distortion",
             artist: "Magnetic Fields",
             year: "2008",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672191/disortion_mjftei.jpg",
             description:
             "Stephin Merritt celebrates all that is fuzzy, sexy, and drenched in reverb on Distortion, a 13-track rendering of the Jesus and Mary Chain's Psychocandy through the barbed sieve of the Magnetic Fields mastermind's seemingly endless notebook of relationship dos and don'ts and self-effacing cognitive therapy sessions.")

Album.create!(title: "Fantastic Vol. 2",
             artist: "Slum Village",
             year: "2000",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672193/slumvill_ayz3ur.jpg",
             description:
             "After being talked about and awaited for months, Slum Village's Fantastic, Vol. 2 finally reached the public's ears, reinforcing the fact that the group -- and particularly producer Jay Dee -- planned to continue where A Tribe Called Quest left off.")

Album.create!(title: "Things Fall Apart",
             artist: "The Roots",
             year: "1999",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672191/thingsfallapart_wxil6i.jpg",
             description:
             "One of the cornerstone albums of alternative rap's second wave, Things Fall Apart was the point where the Roots' tremendous potential finally coalesced into a structured album that maintained its focus from top to bottom.")

Album.create!(title: "Me Against the World",
             artist: "2Pac",
             year: "1995",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672192/meagainsttheworld_pvgrp3.jpg",
             description:
             "Recorded following his near-fatal shooting in New York, and released while he was in prison, Me Against the World is the point where 2Pac really became a legendary figure. Having stared death in the face and survived, he was a changed man on record, displaying a new confessional bent and a consistent emotional depth.")

Album.create!(title: "Lesser Matters",
             artist: "The Radio Dept.",
             year: "2003",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672191/lessermatters_zxuw3y.jpg",
             description:
             "The Radio Dept. are an indie rock band who play fuzzed-out, ramshackle pop songs, and Lesser Matters, their debut full-length, was self-recorded in homes and small studios with unabashedly lo-fi production values, but it somehow manages to project a timeless elegance and aplomb that belie this unassuming provenance.")

Album.create!(title: "Siamese Dream",
             artist: "Smashing Pumpkins",
             year: "1993",
             image_url: "https://res.cloudinary.com/jcbalcita/image/upload/v1478672193/siamesedream_q6ewvz.png",
             description:
             "The sessions for the Pumpkins' sophomore effort, Siamese Dream, were wrought with friction -- Corgan eventually played almost all the instruments himself (except for percussion). Some say strife and tension produces the best music, and it certainly helped make Siamese Dream one of the finest alt-rock albums of all time.")


AlbumStatus.create!(user_id: 1, album_id: 1, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 2, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 3, status: "owned")
AlbumStatus.create!(user_id: 1, album_id: 4, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 5, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 6, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 18, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 17, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 15, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 10, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 13, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 12, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 20, status: "want to listen")
AlbumStatus.create!(user_id: 1, album_id: 30, status: "wishlist")
AlbumStatus.create!(user_id: 1, album_id: 40, status: "want to listen")

Crate.create!(user_id: 1, name: "Hip-Hop")
Crate.create!(user_id: 1, name: "Indie")
Crate.create!(user_id: 1, name: "Electronic")
Crate.create!(user_id: 1, name: "90s")

Crating.create!(crate_id: 1, album_id: 40)
Crating.create!(crate_id: 1, album_id: 14)
Crating.create!(crate_id: 1, album_id: 1)
Crating.create!(crate_id: 1, album_id: 4)
Crating.create!(crate_id: 1, album_id: 8)
Crating.create!(crate_id: 1, album_id: 37)
Crating.create!(crate_id: 1, album_id: 56)
Crating.create!(crate_id: 1, album_id: 55)
Crating.create!(crate_id: 1, album_id: 43)
Crating.create!(crate_id: 1, album_id: 42)
Crating.create!(crate_id: 1, album_id: 17)

Crating.create!(crate_id: 2, album_id: 2)
Crating.create!(crate_id: 2, album_id: 6)
Crating.create!(crate_id: 2, album_id: 10)
Crating.create!(crate_id: 2, album_id: 39)
Crating.create!(crate_id: 2, album_id: 47)
Crating.create!(crate_id: 2, album_id: 32)
Crating.create!(crate_id: 2, album_id: 25)
Crating.create!(crate_id: 2, album_id: 26)
Crating.create!(crate_id: 2, album_id: 19)
Crating.create!(crate_id: 2, album_id: 31)
Crating.create!(crate_id: 2, album_id: 33)

Crating.create!(crate_id: 3, album_id: 5)
Crating.create!(crate_id: 3, album_id: 9)
Crating.create!(crate_id: 3, album_id: 46)
Crating.create!(crate_id: 3, album_id: 48)
Crating.create!(crate_id: 3, album_id: 22)

Review.create!(user_id: 2, album_id: 1, body: "My favorite hip-hop album of all time! I still remember the day I picked it up at the record store when I was 10 years old.", rating: 5)
Review.create!(user_id: 2, album_id: 2, body: "Plus: the quintessential lo-fi album. Minus: the horde of copycats who thought they could do the same thing in their basements.", rating: 4)
Review.create!(user_id: 2, album_id: 4, body: "I won't say I enjoy good rappers being depressed, but I do like the musical output it inspires.", rating: 3)
Review.create!(user_id: 2, album_id: 5, body: "A headphone masterpiece.", rating: 5)
Review.create!(user_id: 2, album_id: 6, body: "Fans of his previous work will be turned off, but this is my favorite album of 2016. Sorry, The Weeknd.", rating: 5)
Review.create!(user_id: 3, album_id: 8, body: "What's with these guys? One of them wears a weird metal mask, the other has multiple personalities? Not for me!", rating: 1)
Review.create!(user_id: 3, album_id: 9, body: "Just a bunch of bleeps and bloops as far as I'm concerned.", rating: 2)
Review.create!(user_id: 2, album_id: 10, body: "Heartbroken when they broke up. At least they left us with this indie classic before calling it quits.", rating: 4)
Review.create!(user_id: 2, album_id: 11, body: "I was a bit worried about LA hip-hop before this album came out. Now Kendrick Lamar and Black Hippy have taken LA nation-wide. This album was the breakthrough.", rating: 5)
Review.create!(user_id: 3, album_id: 12, body: "The album year says 2015, but this is obviously a 60's album. One star for this unforgivable typo.", rating: 1)
Review.create!(user_id: 2, album_id: 14, body: "The best hip-hop album no one knows about. If you want to impress your hip-hop-loving friends, namedrop this classic indie LP.", rating: 5)
Review.create!(user_id: 2, album_id: 15, body: "Bjork really gets me. Thanks Bjork.", rating: 4)
Review.create!(user_id: 2, album_id: 16, body: "A bit derivative, but it's undeniably awesome.", rating: 3)
Review.create!(user_id: 3, album_id: 17, body: "These guys are just way too funky for me. I like my music how I like my food: bland with no flavoring.", rating: 1)
Review.create!(user_id: 2, album_id: 18, body: "Like most Nas albums, there are a few clunkers but with amazing songs to balance them out.", rating: 3)
Review.create!(user_id: 2, album_id: 20, body: "YG is YG, and he's not apologizing for anything. To paraphrase Jay Rock, 'you don't have to like it, cuz the hood gon' love it.'", rating: 3)
Review.create!(user_id: 3, album_id: 22, body: "This music is incomprehensible to me. Help, I don't understand! Where are the hooks? Why is there no music video?", rating: 1)
Review.create!(user_id: 2, album_id: 24, body: "I would not hesitate to call Monk a genius. He manipulates music like Neo in the matrix.", rating: 4)
Review.create!(user_id: 3, album_id: 26, body: "I downloaded this because NPR said it was good. There is too much noise, the lead singer is too loud, and I think their name is weird. No thanks.", rating: 2)
Review.create!(user_id: 2, album_id: 30, body: "Purchased from the $1 bin - the best deal I've ever gotten on a record. Billy Ocean has become a sort of 80's music punchline, but his music is timeless. I dare you to listen to 'Caribbean Queen' without singing and dancing along.", rating: 5)
Review.create!(user_id: 2, album_id: 34, body: "I hate to sound corny, but Mitski makes music that really touches my soul.", rating: 5)
Review.create!(user_id: 3, album_id: 36, body: "Hey, can this guy sound a little more alive? I'm falling asleep here!", rating: 2)
Review.create!(user_id: 2, album_id: 38, body: "Guitars. Awesome.", rating: 4)
