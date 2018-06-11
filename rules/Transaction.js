
const Transaction =  {
  id: String,
  type: String,
  refEmitter: String,
  refReceiver: String,
  refCapturer: String,
  date: String,
  refTransferredResources: String,
  transferredLoad: String
}

module.exports = Transaction;