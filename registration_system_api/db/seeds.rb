# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  User.create(name: 'Beckie Books', library_card_number: '17a9s9xa3jsss' )

  device = Device.create(id: 55555, name: "Roger's Personal Hotspot", location: 'Toronto', deposit_amount: 20, url: 'https://www.rogers.com/cms/rogers-smb-new/page-specific/products-and-solutions/mobile-internet-plans/Images/550x300_ZTEhotspot.png')
  device2 = Device.create(id: 7448, name: "Arel's Hotspot", location: 'Toronto', deposit_amount: 20, url: 'https://www.rogers.com/cms/rogers/page-specific/wireless/mobile-internet/images/novatel-mifi7000.png')
  device3 = Device.create(id: 123456, name: "Will's Mobile Hotspot", location: 'Toronto', deposit_amount: 20, url: 'https://www.rogers.com/cms/rogers-smb-new/page-specific/products-and-solutions/mobile-internet-plans/Images/550x300_ZTEhotspot.png')

  Plan.create(name: 'MY3', device_id: device.id, restrictions: 'Basic Plan', gigabytes: 3, cost: 5 )
  Plan.create(name: 'MY5', device_id: device2.id, restrictions: 'Better Plan', gigabytes: 5, cost: 10 )
  Plan.create(name: 'MY10', device_id: device3.id, restrictions: 'Best Plan', gigabytes: 10, cost: 20 )
