// @flow
'use strict'
import type { Submission } from './submission'

fetch('http://example.com/api/submissions')
  .then(resp => resp.json())
  .then((submissions: Array<Submission>) => {
    submissions.forEach(s => console.log(s.address.state))
  })
