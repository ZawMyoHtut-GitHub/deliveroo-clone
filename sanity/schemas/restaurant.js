export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validaton:(Rule)=>Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validaton:(Rule)=>Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',      
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Loungitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validaton:(Rule)=>Rule.required()
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'string',
      validaton:(Rule)=>Rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
    },
    {
      name: 'type',
      title: 'Category',
      validaton:(Rule)=>Rule.required(),
      type:'reference',
      to:[{type:'category'}]
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type:'reference',to:[{type:'dish'}]}]
    },
  ],
}