```js

{
  currentUser: {
    id: 1,
    username: "guest",
    collection: [],
    wishlist: []
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    submitReview: {errors: ["body can't be blank"]}
  },
  albums: {
    1: {
      artist: "Sample Staters",
      title: "Planning is Fun",
      description: "A 2016 release from the indie heroes..."
    }
  },
  reviews: {
    1: {
      user_id: 1,
      album_id: 1,
      body: "This is a great album."
    }
  }
}
