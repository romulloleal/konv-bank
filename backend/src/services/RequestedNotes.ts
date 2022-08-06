export const RequestedNotes = async (amount: number) => {
  const bankNotes = [100,50,20,10,5,2,1]
  let requestedNotes: any = []
  bankNotes.forEach((note) => {
      const qty = Math.floor(amount / note)
      if(qty > 0 && amount > 0) {
          requestedNotes.push({note, qty})
          amount = amount % note;
      }
  })

  return requestedNotes
}
