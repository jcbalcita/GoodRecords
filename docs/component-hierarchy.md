## Component Hierarchy

**AuthFormContainer**
 - AuthForm

 **HomeContainer**
 - Home
 - Search

 **AlbumsIndexContainer**
 - AlbumIndexItem

 **AlbumDetailContainer**
 - Reviews

## Routes

'/home' will have the IndexRoute to currentUser's collection. If bonus
friends feed is implemented, will have IndexRoute to feed.

|Path   | Component   |
|-------|-------------|
| "/welcome" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/users/:user_id/collection" | "AlbumsIndexContainer" |
| "/users/:user_id/wishlist" | "AlbumsIndexContainer" |
| "/search-results" | "AlbumsIndexContainer"
| "/albums" | "AlbumsIndexContainer" |
| "albums/:album_id" | "AlbumDetailContainer"
