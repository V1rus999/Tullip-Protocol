/**
 * Source: https://gist.github.com/therealssj/934c9b1d23a97f0d099b74abbdc31526
 */
const LENDING_RESERVES = [
  {
    name: "SOLANA",
    token_id: "solana",
    mintAddress: "So11111111111111111111111111111111111111112",
    decimals: 9,
  },
  {
    name: "USDC",
    token_id: "usd-coin",
    account: "FTkSmGsJ3ZqDSHdcnY7ejN1pWV3Ej7i88MYpZyyaqgGt",
    mintAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    liquiditySupplyTokenAccount: "64QJd6MYXUjCBvCaZKaqxiKmaMkPUdNonE1KuY1YoGGb",
    liquidityFeeReceiver: "GPf4tD3q71BzPU79YCadYB2NnLciXAVmYuxfgbKKzUdU",
    collateralTokenMint: "Amig8TisuLpzun8XyGfC5HJHHGUQEscjLgoTWsCCKihg",
    collateralTokenSupply: "GkhrquZah6wrGvM5GntLPWaG5TDdCk6n3QPvohHxWpak",
    destinationCollateralTokenAccount:
      "4s4fdm8fsnFdbEnujgASXwDFZ43afVnSzmk7MDA9Lqhn",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
  },
  {
    name: "USDT",
    token_id: "tether",
    account: "Csn3exasdhDzxYApmnci3d8Khb629VmgK4NQqdeyZBNt",
    mintAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    liquiditySupplyTokenAccount: "124J21csiR1FdDywteXa8LhAmeqBXZRvozhoE7zq9znc",
    liquidityFeeReceiver: "3VQV6yjMUXaTcR6KCvZSAgEKkvZUVEQnNdyEREPbjj31",
    collateralTokenMint: "gLhY2arqFpmVGkpbBbTi3TeWbsWevA8dqrwbKacK3vJ",
    collateralTokenSupply: "CSeQwrb7NHGDJkThJjMPVsQ6Rwb7wMgyFJPDS9gfjxAM",
    destinationCollateralTokenAccount:
      "7t3cWUB6XjwGhqreuK3uxv1BKP5Luczq4VqLSEB4Q9AJ",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
  },
  {
    name: "RAY",
    token_id: "raydium",
    account: "9Bm8d2izGsf9eT6Wr79DTnXBkW2LHYVQa57QzeoTbsAF",
    mintAddress: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
    liquiditySupplyTokenAccount: "9SG6E3jBTTHLNgpV6ueUYypMYMkm4K5zyS9tk9Rsjm8Y",
    liquidityFeeReceiver: "4bRQL2hLqfinNJTsiQW6odhYtYjKXH7zsPc2tafadgoj",
    collateralTokenMint: "8Lg7TowFuMQoGiTsLE6qV9x3czRgDmVy8f8Vv8KS4uW",
    collateralTokenSupply: "2ESAmYeYCW7ee9tcMUdFeW912Sjn8wjeD8odmrvJkeiN",
    destinationCollateralTokenAccount:
      "DAKrpC5HmQrUzbcqKPKE5hK5xfdXdFdf8sxZqhTct4ug",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "SOL",
    token_id: "solana",
    account: "FzbfXR7sopQL29Ubu312tkqWMxSre4dYSrFyYAjUYiC4",
    mintAddress: "11111111111111111111111111111111",
    liquiditySupplyTokenAccount: "CPs1jJ5XAjhcAJsmTToWksAiPEqoLwKMbb1Z83rzaaaU",
    liquidityFeeReceiver: "9GfaYar1r2HrGANq5qNiQnx88HJ7GULQqxXxt2B4U3Zy",
    collateralTokenMint: "H4Q3hDbuMUw8Bu72Ph8oV2xMQ7BFNbekpfQZKS2xF7jW",
    collateralTokenSupply: "8sVTGPsSYkAXFS4tfW5k5z9FvcWhvBqYdMyiiWbbuT7g",
    destinationCollateralTokenAccount:
      "77QZQaxe6Gyn3zw2rnHYR2NmG5KaEGbmqPYmjuC4qguB",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
  },
  {
    name: "mSOL",
    token_id: "msol",
    account: "5LKgrsUF72MityTntAHWLcXivBGxnxapikFArtKUULwX",
    mintAddress: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    liquiditySupplyTokenAccount: "GppNJmvMn2YRSU6gpqJEkUgic76iFjDU17145q8WF27n",
    liquidityFeeReceiver: "6j2mHKx1rSWe4seQbqfD2WksXRg7CaWU2DngNc2Wni8P",
    collateralTokenMint: "8cn7JcYVjDZesLa3RTt3NXne4WcDw9PdUneQWuByehwW",
    collateralTokenSupply: "MDFmkdjJ92y94DDjKCFjDYoU95e2pPefrDEB4gfP53w",
    destinationCollateralTokenAccount:
      "4GbtgR99acKG27cn9j5yHGsAnfduWqaRCX5s4oeze42C",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
  },
  {
    name: "SRM",
    token_id: "serum",
    account: "9AiGVt7Qtap2ijvim4JSudDYgTrSWhwaZmKv8BWGFms9",
    mintAddress: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
    liquiditySupplyTokenAccount: "93JKmnXMYHQ9KPkKRRJ5Mb7bqSv4newhDFvz9QE2suRG",
    liquidityFeeReceiver: "EMwowECdn8hdGf89RuyGL8cbygwa14BN9tLbYDXgMckr",
    collateralTokenMint: "4QSK13NTKxTBExbMjHFsj3QfHBn4Hfp3DGLSba8GvFvh",
    collateralTokenSupply: "9KJNRpfHcdBZH5tTCBsxdUQXrJitpQpmU9T7GxQTQpYK",
    destinationCollateralTokenAccount:
      "4R4V2LatVjWUMpNj5XtfgG4rhPWMwk2ouVyN8gXXbYME",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
  },
  {
    name: "BTC",
    token_id: "bitcoin",
    account: "5CXZ2xKG1i2w3fBXsCEC6zhpK5j164gxJ3bzhyoRB3ZP",
    mintAddress: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
    liquiditySupplyTokenAccount: "dW1q2V7uooHkYBVQ5a6zdKiZVJ4qNWrRqEYy5NmyLoW",
    liquidityFeeReceiver: "5BYymW3BYr63xrYMojL6qWMPmpicTXPPnuUykUmAmKnj",
    collateralTokenMint: "G5V7t3ZHTUGi6xGfk5nc42P1iRkNN3JhaFwFXkvyDmz5",
    collateralTokenSupply: "CpfUmNBXwJwqETF61YMYqHzyXjpraJmQtBT9ZBjzDxWL",
    destinationCollateralTokenAccount:
      "HwTx1mewMgWb6Hkk8eRTbE8WgmNPyk5PZwRoeEjsRfXB",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
  },
  {
    name: "whETH",
    token_id: "ethereum",
    account: "7n9bDFUxehuw7yAHnK9eWKSfMx5u6NYWPVLKYnz93fzj",
    mintAddress: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
    liquiditySupplyTokenAccount: "EWhUcqPMNVetwrJLJhQSkpzE5sU8nAVtRmJJV2EpgD3g",
    liquidityFeeReceiver: "A4RG7kMBBhCUqu7Mge79m7X4ZYHMQ2CTtv8RzF2PLNMu",
    collateralTokenMint: "85SyKDLXZPC1sqdFqasywQojutGhDCobbPHM6zczD1Li",
    collateralTokenSupply: "Ft59j4mGN3JwD9rixqpepFJoAR2VjDyoESH6qApFQtw7",
    destinationCollateralTokenAccount:
      "5E2FmPnj2Yrn7ZbiGLYtesHQHuUiy4hUKacr7sywcsTv",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: true,
  },

  {
    name: "ETH",
    token_id: "ethereum",
    account: "FxH3A2Bw9q3MDivXuWtr8zxiN3S7dGTEkK4Mm95NR2yB",
    mintAddress: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
    liquiditySupplyTokenAccount: "GfPzHMkxRWwM3i2a17ENLo5iRRFdb4iNQAGjTAEGkxJY",
    liquidityFeeReceiver: "4oVF2swaCseP9HxsmUrzxbEzxgHPYpyRMwGM8VUfaBiC",
    collateralTokenMint: "C1gwRSpKFu4Vjrg9MhNfRjg65SV4CNLsb3C6d7kWFEyV",
    collateralTokenSupply: "HnqohLynuMh1JZdKUgbS8v6K1sG2QpVEUQqahdtqKXP6",
    destinationCollateralTokenAccount:
      "3UWp5EuVFpeTpgRRGBudDfYJtiaQWcDYVRJ7scQL4hyo",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
  },
  {
    name: "DFL",
    token_id: "defi-land",
    account: "9z3qY3jfoPVGAfCqr1w95q5RW29tSNvyitLL67o4E6Lk",
    mintAddress: "DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh",
    liquiditySupplyTokenAccount: "BauZ6hiW6Mhffc4CnBh7hox4BxC2kDiHARBXs6xTZ9Zq",
    liquidityFeeReceiver: "ECR33vhDDerYAb4vU8FF5P4G55oAPLNnh6YPp3zmk77w",
    collateralTokenMint: "47cP8Q9x6EpA3AL3brKnPohMSmmjsn9dAvuCKaeFZu1H",
    collateralTokenSupply: "L5FGnzwtpzRisovasyggpAYkZFnSrwLwHWxQ3j1efiV",
    destinationCollateralTokenAccount:
      "3CpSwf5Ait6YGD9XgmGqNqj6jqEBX3PWkxYumt8fzY7L",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
  },
  {
    name: "ATLAS",
    token_id: "star-atlas",
    account: "41Pgp5bSZtNgLiWuwi16Nhf6o75cKzbkKULUd53EFdcU",
    mintAddress: "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx",
    liquiditySupplyTokenAccount: "4U6C1Ym7aBfMNPGMrZqJBVDknhGYmqNM7a2SpcMJreCP",
    liquidityFeeReceiver: "GUCRZ7sESTRV5WP9k4w1yVHjNCUrD72iSTx9veSjukzk",
    collateralTokenMint: "9eGNc4BZCAgpTSEjbu7ACCLjpnZh1WSdts3y4nMik4e7",
    collateralTokenSupply: "9uv5bScpye91V22KU5bgVebQGx1yg98MHWUNfDeYoynJ",
    destinationCollateralTokenAccount:
      "5LrfV4Bnj1uioSKAHTbL5hTh8JTKDLBKxGFxcSDeE2se",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "POLIS",
    token_id: "star-atlas-dao",
    account: "7hxTjiLvBuZcUQnztSRhtvthcsVdu7Na5WWXocwBWA8y",
    mintAddress: "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
    liquiditySupplyTokenAccount: "5XHT644Lbgn7HCY93JSu8Vp8QjfmrEz8ZvD5QyB3EieE",
    liquidityFeeReceiver: "64bogB1G4Km8Toequs4bcwmrPb9evrzof2CugFpL8SNN",
    collateralTokenMint: "658FZo9B4HgKxsKsM7cUHN7jfNFgC7YftusWWYWc4piD",
    collateralTokenSupply: "3AH6WZBW5yYbS6shZAvQTB4iW5d4Shb1EBMMPThGzyQP",
    destinationCollateralTokenAccount:
      "3x5ZLLUwreSHmdPqegC3dt8jH6TXzmqSTxc9iFnt8Y9e",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "TULIP",
    token_id: "solfarm",
    account: "DdFHZu9n41MuH2dNJMgXpnnmuefxDMdUbCp4iizPfz1o",
    mintAddress: "TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs",
    liquiditySupplyTokenAccount: "CTY1eFRYza4nr7Hw4aFXoWwvcAmF99UtgSyTFWWUdJTf",
    liquidityFeeReceiver: "HyPhJfWDoXbsu6AaNmJzc7hwnMG59XcnQPXU1dDE1mJg",
    collateralTokenMint: "Am2kxXzFH84biqbswGWq2zieWqsX2ANnFDyiZr9Fh7zc",
    collateralTokenSupply: "7ffRNyEMYoHZ4eZNHhDPDQTVVXa5dtgoLCwWWkiprCdG",
    destinationCollateralTokenAccount:
      "CQMNF7T32Tg6oryUVSptFiKb4SA4j8f48GenUC8CPcei",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "SAMO",
    token_id: "samoyedcoin",
    account: "6nVuFQdDEPsh7yhPuHR3WbsYYEHHDjetEhvy3hrzbUBb",
    mintAddress: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    liquiditySupplyTokenAccount: "F7jTRpp57TjrkCF4kfgiCfUVAQ8jQMn4MTYbHQ6qC2cV",
    liquidityFeeReceiver: "HWpe5DkaKfKvzYvGPTg79qMLSoeMWbAQ39ZwcjXWgqVf",
    collateralTokenMint: "CEqYVZCL7sHQ8gChh1yL3uajc2UDs6DXuYjPZyRox6MC", // (ssj): this is wrong
    collateralTokenSupply: "z4VJb6aA1gbJHNU7L6R4n48fpckFCvim15xgq7F2jDY",
    destinationCollateralTokenAccount:
      "CCnBMpVNBuL42QtxP2CtQc1pUbEGSYhx6VJ3dwWqq8GF",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
  },
  {
    name: "STEP",
    token_id: "step-finance",
    account: "HpYGGceBPSWhemfsUtdAXjDJpTiWa6MppMr8LaCfkwyX",
    mintAddress: "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
    liquiditySupplyTokenAccount: "ArUwRwHqhg9nYxaJ4643coVggWmnAK9WhkpkR6CZiVSS",
    liquidityFeeReceiver: "8EQyWbvZjb5En3JRY6bmSYkcsWt6poUdBBC2gi3UL43a",
    collateralTokenMint: "36sf6j9N4zSv4BVP1nNPZfSxmuCDxv3Ay9Kq6qy37PXv", // (ssj): this is wrong
    collateralTokenSupply: "7QJw944wtodBV2bVfd2ajHxeAv99Zopo39QyvF3anHMb",
    destinationCollateralTokenAccount:
      "FKctxJ52noZmRN9uofXJi2gJy4Fk7A8d87bdaiCYi7Qu",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: false,
  },
  {
    name: "ORCA",
    token_id: "orca",
    account: "6sJg8f3zcAjrd38QhSA3C34n8MzLq1XVTiQr4msozAuv",
    mintAddress: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
    liquiditySupplyTokenAccount: "4LqykQes5scGz4bZLNaNm1bmgMutCCGqQZVni4VJjWhZ",
    liquidityFeeReceiver: "ADz1SJ28TH2TnLzA9FG7DqiW41CKeLfRvbvDckK1dvFv",
    collateralTokenMint: "HRYfSMc1gYEvxo9zsh14jYHKxAcfJfoVakKtRtJEomb8",
    collateralTokenSupply: "HY3edUqqoHFXDTYkFpsv6hHzH81Qiiq3DqCgRH37uP2c",
    destinationCollateralTokenAccount:
      "5hGH1JPeQzzAZv7DrZNiTyvMj8GEEVQDWR4bqAFzXieu",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "GENE",
    token_id: "genopets",
    account: "3gmxqqfQhMtqAnQWuFNiTqgLkAok54SGuvdncPYEAq2i",
    mintAddress: "GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz",
    liquiditySupplyTokenAccount: "7VrZiv3Qmt4ZJwFWaDQ1FqjCW85XUeJYq66eGGiVBo5R",
    liquidityFeeReceiver: "8wvpmoz7qQTVt9FUCdDKqmqwvrEZcK1AXr2VjaXW9FRB",
    collateralTokenMint: "DxTDysdSXAvZeUt87XagVDbStKUttSrwahot5vnUN6YH",
    collateralTokenSupply: "3dF8iELN9DHDT4D2oMwb7LjuDZDn3Rxx3VtZKVTApWqo",
    destinationCollateralTokenAccount:
      "CJ21ub2pk4VwKK2JU97hR6krbfEmvcANkBNgGAbwgvDX",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
  },
  {
    name: "SNY",
    token_id: "synthetify-token",
    account: "DiC9QF1MLQgzVNRDUdLaDgmAQ5JA8ksd8AaaYrJbEHnD",
    mintAddress: "4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y",
    liquiditySupplyTokenAccount: "HpRAzc4ioizof1ndfJmYKJMvcLP9s9NhVWRXVnMiSV5A",
    liquidityFeeReceiver: "FEfvNVCPXDpBuyx6kdRixxMPJGnqNfAXbRA29KQfsYiU",
    collateralTokenMint: "2yQJdxJy4tGeeXK2u8Lwdy9oY6Ks5shVH9gYtRH9zdDw",
    collateralTokenSupply: "Doia9pBqHjtcRZCVaFoENfRYc6G5TaTmAJpeoeMPVbab",
    destinationCollateralTokenAccount:
      "9HNaGXfNef3iCeZUKCUDmuVrpoCCf3n4MbdqrbRuUxZ",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "ROPE",
    token_id: "rope-token",
    account: "BAkQnFTVBHE9XGo7rEidRMEhrFyXXxKPchW2KXtkPKzG",
    mintAddress: "8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo",
    liquiditySupplyTokenAccount: "6t6M4y22fKEY2RbtKKdrtxQMJKwDrmQLX24KjthbEwdB",
    liquidityFeeReceiver: "8FYkBrPaN9Lk7nRAWNRx9UVtzcPUg1Rm7YVFPvFpc9MZ",
    collateralTokenMint: "9oYxGZP4PWFLm9CFJb9YG6LiZZNz2StPW2yx5oK9k7df",
    collateralTokenSupply: "7k9tKTzMdCuxm9ocGEFUkDnZTw5K4acAzawyV1narjQ1",
    destinationCollateralTokenAccount:
      "HdxLdWVJHha1BZVw9gp8WnKgLR4q9tPgyMRim16H8U88",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: false,
  },
  {
    name: "COPE",
    token_id: "cope",
    account: "DrYZA2Q6eBwFD7d2x8mmsLWNcQJGVEX6ntF9nMmNpPBe",
    mintAddress: "8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh",
    liquiditySupplyTokenAccount: "7v1EmKhBa4deAtMia21CpZ1uUqgFg8oGiXt314x6qpq2",
    liquidityFeeReceiver: "6pFsWsCurqJ3Qzv6yUvXTcvR1p9Zb2TwSPiPAsVJ6pWd",
    collateralTokenMint: "8cm7UrBiDQ4C1ntQSCZfHSWKUizdW31ddTQGNY6Lym3B",
    collateralTokenSupply: "EfFKjzmFtoPPBoz1V78cgvQegoFFE3AKanBh2AT7p1kz",
    destinationCollateralTokenAccount:
      "LX7xER7JXiy8KrK1NnnRN44fN7LFJay6iUqH4cXBLKu",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "ALEPH",
    token_id: "aleph",
    account: "5nestDtwfXxCHbJ7BcWgucBmSp7ApxUtW9cDwDa3apED",
    mintAddress: "CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K",
    liquiditySupplyTokenAccount: "4NaiudHa6ApXqgfLBDvZqQLrabLvMCKtw1vieHfVZpo4",
    liquidityFeeReceiver: "132bKdc6DwnxATSPR2BVZAWtL67327JiVoHzpbNJs7np",
    collateralTokenMint: "FJtaAZd6tXNCFGTq7ifRHt9AWoVdads6gWNc4SXCPw1k",
    collateralTokenSupply: "35jP1V7JQby5wLo3yutNa6dZ2nwWUoVUKiyc63Wr2dB4",
    destinationCollateralTokenAccount:
      "DKfXtqJFy5YCD4r4Uxyjampf7p6ahmS7FuAmkRzP6QbW",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "MEDIA",
    token_id: "media-network",
    account: "4YUqefxqtfa8PwFynQKJjDC74cJzPtR69uP1UqZKQLZQ",
    mintAddress: "ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs",
    liquiditySupplyTokenAccount: "5QWDi7dBdbAXPcVUbxzz93p6ptQAi3AbHQem2CFquX6k",
    liquidityFeeReceiver: "CCEi57RYB3APLho4pv4fqDXqxezkvVwkMnZhKPCWJHCK",
    collateralTokenMint: "6fGTc455JK3bsiSrvyLkEymQasPDXdrw2jJR16UkPnT5",
    collateralTokenSupply: "7WMg5Y5JANsucf5noBMDVJ4kAqu5Y27KGpDdsc6xqukT",
    destinationCollateralTokenAccount:
      "DAxvxAb2K6aFadQqn1rsJphirCS6AFM7mJrApPLSgELo",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "SLRS",
    token_id: "solrise-finance",
    account: "3YzfgFtos1cq1PGWABSYXj3txhwAnWjVZxacPafMPwZH",
    mintAddress: "SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr",
    liquiditySupplyTokenAccount: "ARioqrJfVAP8AFT1xaiEFqiajY6Nhq2CS17mMi6A8Urz",
    liquidityFeeReceiver: "CTnTSgQqYbu8vMoKuoCjzu6SCyERNKx9pHqj7icqvTDq",
    collateralTokenMint: "GtFtWCcLYtWQT8NLRwEfUqc9sgVnq4SbuSnMCpwcutNk",
    collateralTokenSupply: "FYNSmQBv6WxJETxDzrpwPpda1sohzMX8xbEdkquMoysr",
    destinationCollateralTokenAccount:
      "GfWjrthTwB9DHwNQirS1XfGiFcRm9Q6KrjJdGyTATjCd",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: true,
    borrowDisabled: true,
  },
  {
    name: "LIKE",
    token_id: "only1",
    account: "BQk6St4EmdBUo6jx4XCM9bobwV7wwcc4L7QwZHgN3GwL",
    mintAddress: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
    liquiditySupplyTokenAccount: "8W8i2jbRYiw8BQ3aQUv7k7cvQztAidjR263y5aWyHRbE",
    liquidityFeeReceiver: "GYUAka5Ps7b1yTLBdU7Ct91662Q8sacm4GpWCjfYoRaD",
    collateralTokenMint: "DRu91PV94sb6kX6HwMGnGM8TuHrjycS4FmJNRWEgyw6n",
    collateralTokenSupply: "2NfkjMBcVTjMx4adV6LQsLjm3amB1HFXoo8wEjktRgTx",
    destinationCollateralTokenAccount:
      "3raVVLvK8V8UhxAWKdeFBPLBj8vBU3cyuJ6MpuY4Gdm1",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 9,
    visible: true,
    borrowDisabled: true,
  },

  {
    name: "STARS",
    token_id: "starlaunch",
    account: "HJDm6bso3CXHjUZRLRnV3VLupgeNbeYD4SGXEiaqrDEh",
    mintAddress: "HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW",
    liquiditySupplyTokenAccount: "7A7fQ79poA8voKjeD1XgMnKZecHL65bscvGnf9xk3Gmy",
    liquidityFeeReceiver: "E6RNDzy4FauDxr1p9Dsg7NFLv1jGkPNEKkTGvEYX8hi9",
    collateralTokenMint: "F4K5EJe7wHxjDBHs4fGmoztpqS6XGZo1z7PL8gxAfcQo",
    collateralTokenSupply: "36282GgQ2WwXonxWAHxuSbXGSwbY98LWTaEVz8oXrmCf",
    destinationCollateralTokenAccount:
      "4kjiXc45iZazVUtwcywgQD7GVM4K4XGqodWNzVxajgkA",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    visible: false,
  },
  {
    name: "weUNI",
    token_id: "uniswap",
    account: "F3y6c19hcn91RRkqZc6BN6d2B5F9etkNks9BzUxvqc2M",
    mintAddress: "8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36",
    liquiditySupplyTokenAccount: "2V9F8ywuGbbMG3oqcixR1upAvXin6bijK3qbSHnALEof",
    liquidityFeeReceiver: "GzSqPWwjXyssJ7wVtMgxX6NvYKJJkjf589KQJwQz2BRb",
    collateralTokenMint: "5ece7fjw86KL8yRFCrb1SmqyvXwwy5y6wcC8G6aquodx",
    collateralTokenSupply: "DAmpNbLFGWZrNqsBLF7dmYMM9QMbxktQ2Y8dfx88ZVTe",
    destinationCollateralTokenAccount:
      "HKxr5BdAnYc6oUMra1kyEdeqMMcNsmkDnAmwUa1gi2HP",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: false,
  },
  {
    name: "weSUSHI",
    token_id: "sushi",
    account: "FEDEBKAtZzod5oXv1UkSzEeDZGsFe3DK9Wq23o6B4QVN",
    mintAddress: "ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj",
    liquiditySupplyTokenAccount: "Fcj2wrSKfQYQ4JhF9x36DE8W6uKDrjSDqfTYFZ7Lvq6H",
    liquidityFeeReceiver: "7DgrGVCFVLoNVqQXwYhHfR5uA8TS6TiHcKNEXPdG1re8",
    collateralTokenMint: "7iQwV8krcZRqDicFXMh7rCgExXHrZ3WQKsTJrtA4yV9M",
    collateralTokenSupply: "8n7bsURa8dQr5TDbjvz2yUQzzLYF9B6X97HJ4x6omniY",
    destinationCollateralTokenAccount:
      "4bYUHj4cvyw3cjF3b4L6HcG7EiRRvfH7adiJFnHbKAYS",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: false,
  },
  {
    name: "weDYDX",
    token_id: "dydx",
    account: "2vzY9tJNqutsGnUwPmka3LmAEjDXJ2qKeV9fAztD7Sbo",
    mintAddress: "4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU",
    liquiditySupplyTokenAccount: "BmG6AWHdf68MkooJ7D43irLcdkzB9x1CuHPwG8uxvoAc",
    liquidityFeeReceiver: "UsNuAp58e48ohXynJyVF7EBbaZyzgCfzrgknHoAGbRL",
    collateralTokenMint: "8gKgXXcixZm1Qtn8D4t6FDUKZRjoc51AjffFCNXTc7EV",
    collateralTokenSupply: "2H4cED2cKubaBUHmCHS779uyMUKpfkGAFpB52VsFS7C6",
    destinationCollateralTokenAccount:
      "4bYUHj4cvyw3cjF3b4L6HcG7EiRRvfH7adiJFnHbKAYS",
    quoteTokenMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 8,
    visible: false,
  },
];

module.exports = {
  LENDING_RESERVES,
};
