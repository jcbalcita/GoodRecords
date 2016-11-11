# Goodrecords

[Heroku Link][heroku link]

[heroku link]: http://goodrecords.heroku.com

[Trello Link][trello link]

[trello link]: https://trello.com/b/fQWrQnRx/goodrecords

## Minimum Viable Product

GoodRecords is a web application inspired by Goodreads, built using Ruby
on Rails and React/Redux. By the end of Week 9, this app will, at a
minimum, satisfy the following criteria with smooth, bug-free navigation,
adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Albums
- [ ] User album collection
- [ ] User album statuses
- [ ] Reviews
- [ ] Production ReadME

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and front-end user authentication (2 days)
**Objective**: Functioning rails product with front-end authentication.

### Phase 2: Album model, API, and components (2 days)
**Objective**: Albums can be created, updated/destroyed (by the creating
user), and viewed through the API.

### Phase 3: User album collection and wish list (2 days)
**Objective**: Users can add albums to either their collection or wish
list, and the aforementioned can be viewed on their respective view
pages.

### Phase 4: User album reviews (1.5 days)
**Objective**: Users can view, create, update, and destroy reviews for
albums through the API.

### Phase 5: Album search (1 days)
**Objective**: Users can search for albums by name or artist.


### Bonus Features (TBD)
- [ ] Users can "like" reviews, and the most-liked reviews appear first
in the album show page's display.
- [ ] Users can upload avatars
- [ ] Albums have sample audio that can be played via bottom nav bar
- [ ] Users can add 'friends' and see their updates in '/home'
