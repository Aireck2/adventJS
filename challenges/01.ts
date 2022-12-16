const gifts = ["book", "game", "socks"];

function wrapping(gifts: string[]) {
  const paperLength = (giftLength: number) => "*".repeat(giftLength + 2);
  const wrapGift = (gift: string) =>
    [paperLength(gift.length), `*${gift}*`, paperLength(gift.length)].join(
      "\n"
    );
  const wrappedGifts = gifts.map((gift: string) => wrapGift(gift));

  return wrappedGifts;
}

const wrapped = wrapping(gifts);

// console.log(wrapped);
