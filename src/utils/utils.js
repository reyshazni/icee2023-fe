export const fetchEarlyBirdStatus = () => {
  const earlyBirdStart = new Date('2024-01-30T19:00:00+07:00') // 30 January 2024, 13:00 GMT+7
  const earlyBirdEnd = new Date('2024-02-09T23:59:00+07:00') // 9 February 2024, 23:59 GMT+7

  const currentDate = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
  )

  const isEarlyBird =
    currentDate >= earlyBirdStart && currentDate <= earlyBirdEnd

  return isEarlyBird
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

  // EARLY BIRD

  if (isEarlyBird) {
    if (dataPeserta.length === 1) {
      const umumPrice = 60000
      const tpbPrice = 45000
      const hmsPrice = 45000

      return {
        basePrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        discount: 0,
        discountData: [],
        totalPrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    } else if (dataPeserta.length === 2) {
      const hmsDiscount = 30000
      const tpbDiscount = 30000
      const umumDiscount = 20000
      const basePrice = 160000
      const discount =
        hms * hmsDiscount + tpb * tpbDiscount + umum * umumDiscount + 15000
      const discountData = [
        {
          name: 'Discount Package for 2 Persons',
          amount: 15000,
        },
      ]

      if (umum > 0) {
        discountData.push({
          name: 'Early Bird Discount',
          amount: umum * umumDiscount,
        })
      }

      if (hms > 0) {
        discountData.push({
          name: 'Special Discount for HMS Student',
          amount: hms * hmsDiscount,
        })
      }

      if (tpb > 0) {
        discountData.push({
          name: 'Special Discount for TPB Student',
          amount: tpb * tpbDiscount,
        })
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountData: discountData,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    } else if (dataPeserta.length === 3) {
      const hmsDiscount = 30000
      const tpbDiscount = 30000
      const umumDiscount = 20000
      const basePrice = 240000
      const discount =
        hms * hmsDiscount + tpb * tpbDiscount + umum * umumDiscount + 35000
      const discountData = [
        {
          name: 'Discount Package for 3 Persons',
          amount: 35000,
        },
      ]

      if (umum > 0) {
        discountData.push({
          name: 'Early Bird Discount',
          amount: umum * umumDiscount,
        })
      }

      if (hms > 0) {
        discountData.push({
          name: 'Special Discount for HMS Student',
          amount: hms * hmsDiscount,
        })
      }

      if (tpb > 0) {
        discountData.push({
          name: 'Special Discount for TPB Student',
          amount: tpb * tpbDiscount,
        })
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountData: discountData,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    }
  } else {
    // REGULAR
    if (dataPeserta.length === 1) {
      const umumPrice = 80000
      const tpbPrice = 50000
      const hmsPrice = 50000

      return {
        basePrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        discount: 0,
        discountData: [],
        totalPrice: umum * umumPrice + tpb * tpbPrice + hms * hmsPrice,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    } else if (dataPeserta.length === 2) {
      const hmsDiscount = 30000
      const tpbDiscount = 30000
      const basePrice = 160000
      const discount = hms * hmsDiscount + tpb * tpbDiscount + 15000
      const discountData = [
        {
          name: 'Discount Package for 2 Persons',
          amount: 15000,
        },
      ]

      if (hms > 0) {
        discountData.push({
          name: 'Special Discount for HMS Student',
          amount: hms * hmsDiscount,
        })
      }

      if (tpb > 0) {
        discountData.push({
          name: 'Special Discount for TPB Student',
          amount: tpb * tpbDiscount,
        })
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountData: discountData,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    } else if (dataPeserta.length === 3) {
      const hmsDiscount = 30000
      const tpbDiscount = 30000
      const basePrice = 240000
      const discount = hms * hmsDiscount + tpb * tpbDiscount + 35000
      const discountData = [
        {
          name: 'Discount Package for 3 Persons',
          amount: 35000,
        },
      ]

      if (hms > 0) {
        discountData.push({
          name: 'Special Discount for HMS Student',
          amount: hms * hmsDiscount,
        })
      }

      if (tpb > 0) {
        discountData.push({
          name: 'Special Discount for TPB Student',
          amount: tpb * tpbDiscount,
        })
      }

      return {
        basePrice: basePrice,
        discount: discount,
        discountData: discountData,
        totalPrice: basePrice - discount,
        totalPeserta: dataPeserta.length,
        isEarlyBird: isEarlyBird,
      }
    }
  }
}
