# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109222813) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "album_statuses", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "album_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
  end

  add_index "album_statuses", ["album_id"], name: "index_album_statuses_on_album_id", using: :btree
  add_index "album_statuses", ["user_id", "album_id"], name: "index_album_statuses_on_user_id_and_album_id", unique: true, using: :btree

  create_table "albums", force: :cascade do |t|
    t.string   "artist",                                                                                                                              null: false
    t.string   "title",                                                                                                                               null: false
    t.string   "image_url",   default: "http://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_352/v1478127067/vinyl-record-isolated_x2dqmi.jpg"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "year",                                                                                                                                null: false
  end

  add_index "albums", ["artist"], name: "index_albums_on_artist", using: :btree
  add_index "albums", ["title"], name: "index_albums_on_title", using: :btree

  create_table "crates", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "crates", ["user_id", "name"], name: "index_crates_on_user_id_and_name", unique: true, using: :btree

  create_table "cratings", force: :cascade do |t|
    t.integer  "album_id",   null: false
    t.integer  "crate_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cratings", ["album_id", "crate_id"], name: "index_cratings_on_album_id_and_crate_id", unique: true, using: :btree
  add_index "cratings", ["crate_id"], name: "index_cratings_on_crate_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "album_id",   null: false
    t.text     "body",       null: false
    t.integer  "rating"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["album_id"], name: "index_reviews_on_album_id", using: :btree
  add_index "reviews", ["user_id", "album_id"], name: "index_reviews_on_user_id_and_album_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
