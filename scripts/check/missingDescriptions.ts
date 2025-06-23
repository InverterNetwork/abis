import getMissingDescription from '../utils/getMissingDescriptions'

import writeLog from '../utils/writeLog'

const { data } = await getMissingDescription()
writeLog({ content: data, label: 'missingDescriptions' })
