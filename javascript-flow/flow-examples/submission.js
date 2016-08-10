// @flow
export type Submission = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: {
    line1: string,
    line2: string,
    region: string
  }
}

export default {}
