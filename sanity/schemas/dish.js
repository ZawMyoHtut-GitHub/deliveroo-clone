export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validaton:(Rule)=>Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validaton:(Rule)=>Rule.max(200)
    },
    {
      name: 'price',
      title: 'Price of the dish in MMK',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of dish',
      type: 'image',
    },
  ],
}
