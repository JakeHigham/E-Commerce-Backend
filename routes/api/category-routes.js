const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  
  
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  return res.status(200).json(categoryData);
});

router.get('/:id', async (req, res) => {
  
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json(categoryData);

});

router.post('/', async (req, res) => {
  
  try {
    const categoryData = await Category.create(
      {
        category_name: req.body.category_name,
      }
    );
    return res.status(200).json(categoryData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
 
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json(categoryData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(categoryData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
