const SHOP_DATA = [
    {
      id: 1,
      title: 'Amphibians',
      routeName: 'Amphibians',
      items: [
        {
          id: 1,
          name: 'Red-Eyed Tree Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/70/161670-050-8E5BCC80/Red-eyed-tree-frog.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Poison Dart Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/09/174009-050-82793AAE/Frog-Amphibian-Blue-poison-dart-frog-arrow.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Golden Poison Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/54/179154-050-E061A0C4/golden-poison-frog-Habitat-loss-native-rainforest.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Amazon Milk Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/56/179156-050-E48F7A9B/tree-frog-milk-native-Amazon-Rainforest-South.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Tomato Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/31/92731-050-1104084B/Tomato-frog.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Mimic Poison Frog',
          imageUrl: 'https://cdn.britannica.com/s:800x1000/53/179153-050-2AAB02A8/imitator-type-Common-name-poison-dart-frog.jpg',
          price: 14
        }
      ]
    },
    {
      id: 2,
      title: 'Reptiles',
      routeName: 'Reptiles',
      items: [
        {
          id: 10,
          name: 'Anole',
          imageUrl: 'http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheCoolFactor7ReptilesToChillWith-Anole-20160818?$AR0201$',
          price: 220
        },
        {
          id: 11,
          name: 'Bearded Dragon',
          imageUrl: 'http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheCoolFactor7ReptilesToChillWith-BeardedDragon-20160818?$AR0201$',
          price: 280
        },
        {
          id: 12,
          name: 'Leopard Gecko',
          imageUrl: 'http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheCoolFactor7ReptilesToChillWith-LeopardGecko-20160818?$AR0201$',
          price: 110
        },
        {
          id: 13,
          name: 'Corn Snake',
          imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/corn-snake',
          price: 160
        },
        {
          id: 14,
          name: 'Ball Python',
          imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/ball-python-1',
          price: 160
        }
      ]
    },
    {
      id: 3,
      title: 'Crustaceans',
      routeName: 'Crustaceans',
      items: [
        {
          id: 18,
          name: 'Snow Crab',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chionoecetes_opilio_Kanikkokan.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Hermit Crab',
          imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/ARHERO-ASetupGuideForNewHermitCrabParents-20160818?$AR0301$',
          price: 90
        },
        {
          id: 20,
          name: 'Blue Crayfish',
          imageUrl: 'https://farm2.staticflickr.com/1571/25340283492_6ffd529b51.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Marmorkrebs',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Marmorkrebs_Procambarus_fallax_forma_virginalis.JPG/512px-Marmorkrebs_Procambarus_fallax_forma_virginalis.JPG',
          price: 165
        }
      ]
    },
    {
      id: 4,
      title: 'Salt Water',
      routeName: 'Salt Water',
      items: [
        {
          id: 23,
          name: 'Dottyback',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/09/Petland_Texas_Dottyback.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Firefish',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/09/Petland_Texas_Firefish.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Tangs',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/09/Petland_Texas_Yellow_tang.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Damselfish',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/09/Petland_Texas_Damselfish.jpg',
          price: 80
        },
      ]
    },
    {
      id: 5,
      title: 'Fresh Water',
      routeName: 'Fresh Water',
      items: [
        {
          id: 30,
          name: 'Neon Tetra',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_Neon_Tetra.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Guppies',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_guppies.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Mollies',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_mollies.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Betta Fish',
          imageUrl: 'https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_Betta_fish.jpg',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;