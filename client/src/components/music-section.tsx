import { motion } from "framer-motion";
import { Music, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const favoriteArtists = [
  {
  name: "Suki Waterhouse",
  genre: "Indie Pop / Dream Rock",
  description: "Soft, cinematic, and effortlessly cool. Her songs feel like late-night thoughts wrapped in vintage romance.",
  spotifyEmbed: "https://open.spotify.com/embed/album/2SH7pbrUVL6DRWB6g8BALw",
  spotifyUrl: "https://open.spotify.com/album/2SH7pbrUVL6DRWB6g8BALw",
  gradient: "from-rose-400 to-pink-500",
  albums: ["Milk Teeth", "I Can’t Let Go", "Good Looking"],
  },
  {
    name: "Mitski",
    genre: "Indie Rock / Art Pop",
    description: "Raw emotions and poetic lyrics that speak to your soul. Her music makes you feel understood.",
    spotifyEmbed: "https://open.spotify.com/embed/artist/2uYWxilOVlUdk4oV9DvwqK?utm_source=generator&theme=0",
    spotifyUrl: "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK",
    gradient: "from-pink-500 to-rose-500",
    albums: ["Laurel Hell", "Be the Cowboy", "Puberty 2"],
  },
];

export function MusicSection() {
  return (
    <section id="music" className="py-24 px-4" data-testid="section-music">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-music">
            My <span className="text-gradient">Music</span> Favorites
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-music-description">
            The artists and albums that keep me vibing. Music is life, fr fr!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" data-testid="grid-music-artists">
          {favoriteArtists.map((artist, index) => {
            const artistId = artist.name.toLowerCase().replace(/\s/g, '-');
            return (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card overflow-hidden group"
                data-testid={`card-artist-${artistId}`}
              >
                <div className={`h-3 bg-gradient-to-r ${artist.gradient}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1" data-testid={`text-artist-name-${artistId}`}>{artist.name}</h3>
                      <p className="text-xs text-muted-foreground" data-testid={`text-artist-genre-${artistId}`}>{artist.genre}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${artist.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Music className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-artist-desc-${artistId}`}>
                    {artist.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Popular Albums</p>
                    <div className="flex flex-wrap gap-2" data-testid={`container-albums-${artistId}`}>
                      {artist.albums.map((album) => (
                        <span
                          key={album}
                          className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                          data-testid={`badge-album-${album.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          {album}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="aspect-[3/1] rounded-lg overflow-hidden mb-4 bg-muted/30" data-testid={`player-spotify-${artistId}`}>
                    <iframe
                      src={artist.spotifyEmbed}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                      title={`${artist.name} Spotify Player`}
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full glass-button"
                    onClick={() => window.open(artist.spotifyUrl, '_blank')}
                    data-testid={`button-spotify-${artistId}`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Listen on Spotify
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
