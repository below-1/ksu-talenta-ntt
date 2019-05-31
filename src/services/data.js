export const pekerjaan = {
  weight: 4,
  options: [
    {
      text: 'PNS, TNI, POLRI, Pendeta',
      value: 5
    },
    {
      text: 'Pegawai BUMN/BUMD',
      value: 4
    },
    {
      text: 'Wiraswasta, Pensiunan',
      value: 3
    },
    {
      text: 'Petani Nelayan',
      value: 2
    },
    {
      text: 'Buruh',
      value: 1
    }
  ]
}

export const penghasilan = {
  weight: 5,
  options: [
    {
      lower: 0,
      upper: 500000,
      value: 1
    },
    {
      lower: 500000,
      upper: 1499999,
      value: 2
    },
    {
      lower: 1500000,
      upper: 2499999,
      value: 3
    },
    {
      lower: 2500000,
      upper: 4000000,
      value: 4
    },
    {
      lower: 4000000,
      upper: 99999999,
      value: 5
    }
  ]
}

export const jaminan = {
  weight: 5,
  options: [
    {
      text: 'Akta Tanah',
      value: 5
    },
    {
      text: 'SK, BPKB Mobil',
      value: 4
    },
    {
      text: 'BPKB Motor',
      value: 3
    },
    {
      text: 'Barang Elektronik',
      value: 2
    }
  ]
}

export const kondisiTempatTinggal = {
  weight: 4,
  options: [
    {
      text: 'Tidak Layak',
      value: 1
    },
    {
      text: 'Cukup Layak',
      value: 3
    },
    {
      text: 'Sangat Layak',
      value: 5
    }
  ]
}

export const tanggungan = {
  weight: 3,
  cost: true,
  options: [
    {
      lower: 1,
      upper: 2,
      value: 1
    },
    {
      lower: 2,
      upper: 3,
      value: 2
    },
    {
      lower: 3,
      upper: 4,
      value: 3
    },
    {
      lower: 4,
      upper: 5,
      value: 4
    },
    {
      lower: 5,
      upper: 1000,
      value: 5
    }
  ]
}

export const jangkaAngsuran = {
  weight: 3,
  cost: true,
  options: [
    {
      lower: 0,
      upper: 6,
      value: 1
    },
    {
      lower: 6,
      upper: 11,
      value: 2
    },
    {
      lower: 11,
      upper: 16,
      value: 3
    },
    {
      lower: 16,
      upper: 21,
      value: 4
    },
    {
      lower: 21,
      upper: 1000,
      value: 5
    }
  ]
}

export const besarPinjaman = {
  weight: 5,
  options: [
    {
      lower: 0,
      upper: 5000000,
      value: 1
    },
    {
      lower: 5000000,
      upper: 16000000,
      value: 2
    },
    {
      lower: 16000000,
      upper: 36000000,
      value: 3
    },
    {
      lower: 36000000,
      upper: 50000000,
      value: 4
    },
    {
      lower: 50000000,
      upper: 50000000000,
      value: 5
    }
  ]
}

export const pengeluaran = {
  weight: 4,
  cost: true,
  options: [
    {
      lower: 0,
      upper: 500000,
      value: 1
    },
    {
      lower: 500000,
      upper: 1500000,
      value: 2
    },
    {
      lower: 1500000,
      upper: 2500000,
      value: 3
    },
    {
      lower: 2500000,
      upper: 4000000,
      value: 4
    },
    {
      lower: 4000000,
      upper: 999999999,
      value: 5
    }
  ]
}

export default {
  pekerjaan,
  penghasilan,
  jaminan,
  kondisiTempatTinggal,
  tanggungan,
  jangkaAngsuran,
  besarPinjaman,
  pengeluaran
}
