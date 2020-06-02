module.exports = {
	formats: 'local woff woff2',
	display: "swap",
	custom: {
		"FuturaPT": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/FuturaPT-Light.woff",
							woff2: "../fonts/FuturaPT-Light.woff2"
						}
					},
					500: {
						url: {
							woff: "../fonts/FuturaPT-Medium.woff",
							woff2: "../fonts/FuturaPT-Medium.woff2"
						}
					},
					600: {
						url: {
							woff2: "../fonts/FuturaPT-Book.woff2"
						}
					},
					700: {
						url: {
							woff: "../fonts/FuturaPT-Bold.woff",
							woff2: "../fonts/FuturaPT-Bold.woff2"
						}
					},
					800: {
						url: {
							woff: "../fonts/FuturaPT-ExtraBold.woff",
							woff: "../fonts/FuturaPT-ExtraBold.woff2",
						}
					}
				}
			}
		},
	}
}