import { Globalsettings } from '../globalsettings.js'

/**
 * Publishes the global settings.
 * @returns {Mongo.Cursor} The global settings.
 */
Meteor.publish('globalsettings', () => {
  const user = Meteor.users.findOne(this.userId)
  if (user && user.isAdmin) {
    return Globalsettings.find()
  }
  return Globalsettings.find({ restricted: { $ne: true } })
})
