const MessageMixin = {
  data() {
    return {
      message: null,
      messageAdd: null,
      messageUpdate: null,
      messageReplace: null,
      messageDelete: null,
      timeouts: [],
      timeoutsAdd: [],
      timeoutsUpdate: [],
      timeoutsReplace: [],
      timeoutsDelete: [],
    };
  },
  watch: {
    message(newMessage) {
      for (let i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }
      this.message = newMessage;
      this.timeouts = [];
      this.timeouts.push(
        window.setTimeout(() => {
          this.message = null;
        }, 4000)
      );
    },
    messageAdd(newMessage) {
      for (let i = 0; i < this.timeoutsAdd.length; i++) {
        clearTimeout(this.timeoutsAdd[i]);
      }
      this.messageAdd = newMessage;
      this.timeoutsAdd = [];
      this.timeoutsAdd.push(
        window.setTimeout(() => {
          this.messageAdd = null;
        }, 4000)
      );
    },
    messageUpdate(newMessage) {
      for (let i = 0; i < this.timeoutsUpdate.length; i++) {
        clearTimeout(this.timeoutsUpdate[i]);
      }
      this.messageUpdate = newMessage;
      this.timeoutsUpdate = [];
      this.timeoutsUpdate.push(
        window.setTimeout(() => {
          this.messageUpdate = null;
        }, 4000)
      );
    },
    messageReplace(newMessage) {
      for (let i = 0; i < this.timeoutsReplace.length; i++) {
        clearTimeout(this.timeoutsReplace[i]);
      }
      this.messageReplace = newMessage;
      this.timeoutsReplace = [];
      this.timeoutsReplace.push(
        window.setTimeout(() => {
          this.messageReplace = null;
        }, 4000)
      );
    },
    messageDelete(newMessage) {
      for (let i = 0; i < this.timeoutsDelete.length; i++) {
        clearTimeout(this.timeoutsDelete[i]);
      }
      this.messageDelete = newMessage;
      this.timeoutsDelete = [];
      this.timeoutsDelete.push(
        window.setTimeout(() => {
          this.messageDelete = null;
        }, 4000)
      );
    },
  },
};

export default MessageMixin;
