import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "SERENE",
    subtitle: "Lavender & Cedar",
    slug: "serene-lavender-cedar",
    category: "relaxing",
    categoryLabel: "Nến thơm thư giãn",
    price: 320000,
    badge: "BÁN CHẠY",
    weight: "200g",
    burnTime: "45 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Lavender Pháp", "Bergamot Calabria"],
      middle: ["Gỗ Cedar", "Hoa Diên Vĩ (Iris)", "Violet"],
      base: ["Musk trắng", "Sandalwood ấm", "Hổ phách (Ambergris)"]
    },
    mood: "Bình yên · Thư giãn · Ngủ ngon",
    shortDescription: "Hương oải hương dịu dàng hòa quyện cùng gỗ tuyết tùng ấm áp — một không gian thư giãn hoàn hảo.",
    description: "SERENE được sáng tạo cho những khoảnh khắc tĩnh lặng và phục hồi năng lượng cuối ngày. Hương oải hương Provence mở đầu bằng sự tinh khiết và thư thái, dần hòa vào chiều sâu trầm tĩnh của gỗ tuyết tùng và diên vĩ, kết thúc trên nền musk trắng sang trọng bền bỉ. Đổ tay thủ công tại xưởng VELA.",
    usageInstructions: "Đốt nến lần đầu ít nhất 2–3 giờ để sáp tan chảy đều tới thành cốc, chống tạo hố lõm. Cắt bấc về còn 5-6mm trước mỗi lần thắp. Không đốt quá 4 giờ liên tục.",
    images: [
      "https://images.unsplash.com/photo-1602874801006-67a87d5e1dce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574606496414-6bb5f1526828?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604505507261-89c917830d05?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.9,
    reviewCount: 148,
    inStock: true,
    scentsProfile: ["floral", "woody"],
    sizes: [
      { label: "Small", weight: "100g", price: 180000, burnTime: "20 giờ" },
      { label: "Medium", weight: "200g", price: 320000, burnTime: "45 giờ" },
      { label: "Large", weight: "350g", price: 520000, burnTime: "80 giờ" }
    ]
  },
  {
    id: "2",
    name: "SOLEIL",
    subtitle: "Citrus & Neroli",
    slug: "soleil-citrus-neroli",
    category: "relaxing",
    categoryLabel: "Nến thơm thư giãn",
    price: 280000,
    badge: "MỚI",
    weight: "150g",
    burnTime: "35 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Cam ngọt Seville", "Lemon mọng nước", "Bưởi hồng"],
      middle: ["Hoa cam Neroli", "Trà xanh non", "Bergamot"],
      base: ["Vetiver thanh mảnh", "Musk trắng", "Gỗ lũa Driftwood"]
    },
    mood: "Tươi mới · Năng lượng · Tập trung",
    shortDescription: "Cảm giác buổi sáng nắng tràn — vị trái cây sống động và neroli hoa dịu tươi mát trọn ngày.",
    description: "SOLEIL mang hơi thở tươi tắn của bình minh vùng duyên hải Địa Trung Hải vào căn phòng của bạn. Tinh dầu vỏ cam ép lạnh bùng nổ năng lượng, đan xen cùng neroli hoa trắng tinh tế và lá trà xanh giúp khơi gợi cảm hứng làm việc và xua tan căng thẳng.",
    usageInstructions: "Đốt nến trong không gian làm việc hoặc phòng khách để kích thích sự tập trung và sáng tạo. Cắt tỉa bấc gọn gàng trước khi châm lửa.",
    images: [
      "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621349375404-01f48593be7a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577302463975-bf68e799e79d?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.7,
    reviewCount: 62,
    inStock: true,
    scentsProfile: ["fruity", "fresh"],
    sizes: [
      { label: "Small", weight: "100g", price: 180000, burnTime: "20 giờ" },
      { label: "Medium", weight: "150g", price: 280000, burnTime: "35 giờ" }
    ]
  },
  {
    id: "3",
    name: "FORÊT",
    subtitle: "Sandalwood & Vetiver",
    slug: "foret-sandalwood-vetiver",
    category: "relaxing",
    categoryLabel: "Nến thơm thư giãn",
    price: 350000,
    badge: null,
    weight: "200g",
    burnTime: "45 giờ",
    waxType: "100% Soy Wax",
    wickType: "Wooden Wick (Bấc gỗ)",
    fragranceNotes: {
      top: ["Lá kim xanh", "Tiêu đen hữu cơ", "Cỏ tươi đẫm sương"],
      middle: ["Gỗ Cedar tuyết tùng", "Hoắc hương (Patchouli)", "Gỗ Guaiac"],
      base: ["Đàn hương Mysore (Sandalwood)", "Vetiver trầm", "Hổ phách khói"]
    },
    mood: "Sâu lắng · Bình tĩnh · Thiền định",
    shortDescription: "Hương rừng sâu huyền bí — sandalwood ấm nồng hòa cùng vetiver đất trầm tĩnh lặng.",
    description: "FORÊT tái hiện cảm giác đi dạo một mình qua khu rừng thông nguyên sinh sau cơn mưa rào. Bấc gỗ tự nhiên phát ra âm thanh lách tách tí tách êm tai như ánh lửa sưởi ấm mùa đông, dẫn dắt tâm trí vào trạng thái an yên và thiền định sâu sắc.",
    usageInstructions: "Bấc gỗ cần đốt giữ ngọn lửa 5-10 giây đầu tiên để bén đều sáp. Cắt bỏ phần tro đen trên đầu bấc trước mỗi lần sử dụng.",
    images: [
      "https://images.unsplash.com/photo-1629553749129-2e134d40287a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607289171439-a6defd71be79?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1668112037360-900ff60ef6f7?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.8,
    reviewCount: 95,
    inStock: true,
    scentsProfile: ["woody", "fresh"],
    sizes: [
      { label: "Medium", weight: "200g", price: 350000, burnTime: "45 giờ" }
    ]
  },
  {
    id: "4",
    name: "BLOOM",
    subtitle: "Rose & Jasmine",
    slug: "bloom-rose-jasmine",
    category: "decorative",
    categoryLabel: "Nến thơm trang trí",
    price: 290000,
    badge: "MỚI",
    weight: "150g",
    burnTime: "35 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Mâm xôi (Raspberry)", "Vỏ quýt", "Chanh vàng"],
      middle: ["Hoa hồng Damask", "Hoa nhài Sambac", "Hoa mẫu đơn"],
      base: ["Xạ hương trắng", "Hoắc hương", "Gỗ đàn hương"]
    },
    mood: "Lãng mạn · Tươi tắn · Tinh khiết",
    shortDescription: "Hoa hồng và nhài hòa quyện ngọt ngào — vẻ đẹp của một buổi chiều vườn hoa trong từng hơi thở.",
    description: "BLOOM là bản tình ca của những cánh hoa nở rộ lúc hoàng hôn. Nốt hương hoa hồng tháng năm đằm thắm kết hợp cùng hoa nhài thanh khiết, gợi nhớ đến những buổi hẹn hò lãng mạn và không gian phòng ngủ dịu êm.",
    usageInstructions: "Thích hợp đặt tại bàn trang điểm, phòng ngủ hoặc bàn trà tiếp khách. Đốt nến từ 1-3 giờ để hương thơm lan tỏa đều phòng.",
    images: [
      "https://images.unsplash.com/photo-1563282396-6beb45fc22fb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1638633552021-c846610e6467?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.6,
    reviewCount: 54,
    inStock: true,
    scentsProfile: ["floral", "fruity"],
    sizes: [
      { label: "Small", weight: "100g", price: 190000, burnTime: "20 giờ" },
      { label: "Medium", weight: "150g", price: 290000, burnTime: "35 giờ" }
    ]
  },
  {
    id: "5",
    name: "CÉLESTE",
    subtitle: "Vanilla & Tonka",
    slug: "celeste-vanilla-tonka",
    category: "decorative",
    categoryLabel: "Nến thơm trang trí",
    price: 310000,
    badge: "BÁN CHẠY",
    weight: "200g",
    burnTime: "45 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Bergamot Ý", "Bạch đậu khấu (Cardamom)", "Hoa cam"],
      middle: ["Hoa nhài đêm", "Diên vĩ quý", "Heliotrope"],
      base: ["Vanilla Madagascar nguyên chất", "Hạt Tonka rang", "Xạ hương ấm"]
    },
    mood: "Ấm áp · Ngọt ngào · Cuốn hút",
    shortDescription: "Vanilla thuần khiết và tonka bean sang trọng — ấm áp như một cái ôm, ngọt ngào như một kỷ niệm.",
    description: "CÉLESTE như một chiếc chăn len mềm mại ôm ấp bạn trong tiết trời se lạnh. Tinh chất vanilla Madagascar tự nhiên mang vị ngọt bùi, hòa quyện với tonka hun khói tạo nên hương thơm gây nghiện khó quên.",
    usageInstructions: "Đốt nến trong những ngày mưa hoặc buổi tối đọc sách để mang lại cảm giác an toàn và ấm cúng tuyệt đối.",
    images: [
      "https://images.unsplash.com/photo-1612634824306-30115acfb10c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1634306954206-0b07090bf575?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1742544637816-44a0e7f016c6?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.9,
    reviewCount: 203,
    inStock: true,
    scentsProfile: ["floral", "woody"],
    sizes: [
      { label: "Small", weight: "100g", price: 175000, burnTime: "20 giờ" },
      { label: "Medium", weight: "200g", price: 310000, burnTime: "45 giờ" },
      { label: "Large", weight: "350g", price: 500000, burnTime: "80 giờ" }
    ]
  },
  {
    id: "6",
    name: "JADE",
    subtitle: "Green Tea & Mint",
    slug: "jade-green-tea-mint",
    category: "relaxing",
    categoryLabel: "Nến thơm thư giãn",
    price: 260000,
    badge: null,
    weight: "100g",
    burnTime: "25 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Bạc hà Âu cay the", "Citrus xanh", "Cỏ roi ngựa (Lemon verbena)"],
      middle: ["Trà xanh búp non", "Trúc ngọc", "Cánh sen sương"],
      base: ["Gỗ Tuyết Tùng trắng", "Musk thuần", "Vetiver thảo mộc"]
    },
    mood: "Mát lạnh · Thanh khiết · Thư thái",
    shortDescription: "Hương trà xanh mát lạnh kết hợp bạc hà — thanh khiết, tỉnh táo, nhẹ nhàng như sương mai.",
    description: "JADE gợi lên khung cảnh một sớm mai tại vườn thiền trà đạo Kyoto. Không gian được thanh lọc bởi hơi thở thảo mộc mát lành, đem lại cảm giác tỉnh táo, tập trung và sảng khoái tức thì.",
    usageInstructions: "Rất phù hợp cho phòng tắm, góc tập yoga hoặc bàn làm việc buổi sáng.",
    images: [
      "https://images.unsplash.com/photo-1544767219-0f517a9ae30b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.7,
    reviewCount: 77,
    inStock: true,
    scentsProfile: ["fresh", "woody"],
    sizes: [
      { label: "Standard", weight: "100g", price: 260000, burnTime: "25 giờ" }
    ]
  },
  {
    id: "7",
    name: "AMBER DUSK",
    subtitle: "Oud & Amber Gift Set",
    slug: "amber-dusk-gift-set",
    category: "gift-set",
    categoryLabel: "Set quà tặng",
    price: 780000,
    originalPrice: 920000,
    badge: "SALE",
    weight: "3 × 100g",
    burnTime: "25 giờ / nến",
    waxType: "100% Soy Wax",
    wickType: "Wooden Wick",
    fragranceNotes: {
      top: ["Bergamot đậm", "Hạt tiêu đen", "Saffron tây á"],
      middle: ["Hoa hồng đen", "Gỗ Trầm (Oud)", "Hổ phách mật ong"],
      base: ["Amber vàng", "Đàn hương quý", "Da thuộc (Leather)"]
    },
    mood: "Sang trọng · Huyền bí · Quyến rũ",
    shortDescription: "Set quà tặng 3 nến cao cấp — oud huyền bí, amber sang trọng và sandalwood sâu lắng.",
    description: "AMBER DUSK là kiệt tác quà tặng dành cho những ai trân trọng giá trị nghệ thuật hương thơm. Bộ ba tác phẩm được đóng gói tỉ mỉ trong hộp quà sơn mài kem ép kim sang trọng, kèm diêm dài VELA và thiệp viết tay.",
    usageInstructions: "Có thể đốt lần lượt từng nến hoặc phối hợp không gian rộng để tạo nên bản giao hưởng hương thơm đa tầng độc bản.",
    images: [
      "https://images.unsplash.com/photo-1616423492443-5322d910aedb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.9,
    reviewCount: 89,
    inStock: true,
    scentsProfile: ["woody", "floral"],
    sizes: [
      { label: "Luxury Gift Box", weight: "3 × 100g", price: 780000, burnTime: "75 giờ tổng" }
    ]
  },
  {
    id: "8",
    name: "LUMIÈRE",
    subtitle: "White Musk & Cashmere",
    slug: "lumiere-white-musk-cashmere",
    category: "decorative",
    categoryLabel: "Nến thơm trang trí",
    price: 330000,
    badge: null,
    weight: "200g",
    burnTime: "45 giờ",
    waxType: "100% Soy Wax",
    wickType: "Cotton Wick",
    fragranceNotes: {
      top: ["Bergamot thanh khiết", "Nốt Aldehyde sáng", "Chanh vàng"],
      middle: ["Hoa diên vĩ Iris", "Violet tím", "Bách hợp Lily"],
      base: ["Cashmere nhung", "Xạ hương trắng cao cấp", "Đàn hương mịn"]
    },
    mood: "Thuần khiết · Sang trọng · Tinh tế",
    shortDescription: "Musk trắng và cashmere hòa quyện — tinh tế, thuần khiết và vô cùng sang trọng.",
    description: "LUMIÈRE tựa như ánh sáng trong trẻo len lỏi qua khung rèm lụa trắng. Nốt xạ hương cashmere êm ái tạo cảm giác sạch sẽ, thơm mát như vừa bước ra từ spa cao cấp.",
    usageInstructions: "Đốt nến trong phòng khách hoặc phòng đọc sách để lan tỏa bầu không khí vương giả, tinh tế.",
    images: [
      "https://images.unsplash.com/photo-1686190696154-98ef6d630c68?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1644052024051-40524fe3cf1f?w=900&auto=format&fit=crop&q=80"
    ],
    rating: 5,
    ratingScore: 4.8,
    reviewCount: 117,
    inStock: true,
    scentsProfile: ["floral", "woody"],
    sizes: [
      { label: "Small", weight: "100g", price: 190000, burnTime: "22 giờ" },
      { label: "Medium", weight: "200g", price: 330000, burnTime: "45 giờ" },
      { label: "Large", weight: "350g", price: 540000, burnTime: "80 giờ" }
    ]
  }
];
