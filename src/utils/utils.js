export const fetchEarlyBirdStatus = async () => {
  try {
    const response = await fetch(
      'https://be-staging-s3ey3nqirq-et.a.run.app/register/count-registrant/?request=seminar'
    )
    const data = await response.json()
    const count = data.data.count

     const earlyBirdStart = new Date('2024-01-30T13:00:00+07:00'); // 30 January 2024, 13:00 GMT+7
     const earlyBirdEnd = new Date('2024-02-02T23:59:00+07:00'); // 2 February 2024, 23:59 GMT+7
 
     const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
 
     const isEarlyBird =
       count < 31 &&
       currentDate >= earlyBirdStart &&
       currentDate <= earlyBirdEnd;
 
     return isEarlyBird;
  } catch (error) {
    console.error('Error fetching early bird status:', error)
    return false // Default to not early bird if API call fails
  }
}

export const getPrice = (dataPeserta, isEarlyBird) => {
  let umum = 0
  let tpb = 0
  let hms = 0

  dataPeserta.forEach((peserta) => {
    switch (peserta.jenis_peserta) {
      case 'umum':
        umum += 1
        break
      case 'tpb':
        tpb += 1
        break
      case 'hms':
        hms += 1
        break
      default:
        break
    }
  })

  if (isEarlyBird) {
    return {
      basePrice: (umum + tpb + hms) * 60000,
      discount: null,
      discountTexts: [],
      totalPrice: (umum + tpb + hms) * 60000,
      totalPeserta: dataPeserta.length,
    }
  } else {
    if (dataPeserta.length === 1) {
      const umumPrice = 80000
      const tpbPrice = 60000
      const hmsPrice = 50000

      return {
        basePrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        discount: 0,
        discountTexts: [],
        totalPrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        totalPeserta: dataPeserta.length,
      }
    } else if (dataPeserta.length === 2) {
      const hmsDiscount = 20000
      const tpbDiscount = 10000
      const basePrice = 140000
      const discount = hms * hmsDiscount + tpb * tpbDiscount
      const discountTexts = []

      if (hms > 0 && tpb > 0) {
        discountTexts.push('Special Discount for TPB & HMS Student')
        discountTexts.push('Discount Package for 2 Persons')
      }

      if (hms === 0 && tpb > 0) {
        discountTexts.push('Special Discount for TPB Student')
        discountTexts.push('Discount Package for 2 Persons')
      }

      if (hms > 0 && tpb === 0) {
        discountTexts.push('Special Discount for HMS Student')
        discountTexts.push('Discount Package for 2 Persons')
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountTexts: discountTexts,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
      }
    } else if (dataPeserta.length === 3) {
      const hmsDiscount = 30000
      const tpbDiscount = 20000
      const basePrice = 200000
      const discount = hms * hmsDiscount + tpb * tpbDiscount
      const discountTexts = []
      if (hms > 0 && tpb > 0) {
        discountTexts.push('Special Discount for TPB & HMS Student')
        discountTexts.push('Discount Package for 3 Persons')
      }

      if (hms === 0 && tpb > 0) {
        discountTexts.push('Special Discount for TPB Student')
        discountTexts.push('Discount Package for 3 Persons')
      }

      if (hms > 0 && tpb === 0) {
        discountTexts.push('Special Discount for HMS Student')
        discountTexts.push('Discount Package for 3 Persons')
      }

      // SPECIAL CASES
      if (tpb === 2 && hms === 1) {
        discount = 50000
      }

      if (tpb === 1 && hms === 2) {
        discount = 70000
      }

      if (hms === 3) {
        discount = 80000
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountTexts: discountTexts,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
      }
    }
  }
}
