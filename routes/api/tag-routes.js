const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
  
  const tagData = await Tag.findAll({
    include: [
      { model: Product }
    ],
  });
  return res.status(200).json(tagData);
});

router.get('/:id', async (req, res) => {
  
  const tagData = await Tag.findAll({
    include: [
      { model: Product }
    ],
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json(tagData);
});

router.post('/', async (req, res) => {
 
  try {
    const tagData = await Tag.create(
      {
        tag_name: req.body.tag_name,
      }
    );
    return res.status(200).json(tagData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json(tagData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(tagData);
  }
  catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
