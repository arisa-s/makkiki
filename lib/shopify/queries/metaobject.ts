export const getVacationStatusQuery = `
  query getPasswordProtection {
    metaobject(handle: {handle: "vacation-t9cy6ber", type: "vacation"}) {
      fields {
        key
        value
      }
    }
  }
`;
