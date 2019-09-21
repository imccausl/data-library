# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  User.create(name: 'Beckie Books', library_card_number: '17a9s9xa3jsss' )
  device = Device.create(name: "Roger's Personal Hotspot", location: 'Toronto', deposit_amount: 20, url: 'https://www.rogers.com/cms/rogers-smb-new/page-specific/products-and-solutions/mobile-internet-plans/Images/550x300_ZTEhotspot.png')
  Plan.create(name: 'My3', device_id: device.id, restrictions: 'No Social Media, No Streaming, No Bueno', gigabytes: 3, cost: 20 )
  Plan.create(name: 'My5', device_id: device.id, restrictions: 'No Social Media, No Streaming, No Bueno', gigabytes: 3, cost: 30 )
  Plan.create(name: 'My10', device_id: device.id, restrictions: 'No Social Media, No Streaming, No Bueno', gigabytes: 3, cost: 50 )
