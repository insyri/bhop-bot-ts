@decorators.command("insardia", syntax="<fortune ...>", args=1, optional_args=500, allow_private=True,
                        description="Speak lke insrda!!")
    async def eightball(self, message, *text):
        string = " ".join(text)                        -
        vowels = ["a", "e", "i", "o", "u"]             |
        alternatives = {              self explanatory |
            "hi": ["hi", "hizies"],                    |
            "hey": ["hey", "heya"],                    |  
            "and": ["and", "n"],                       |
            "you": ["yu", "you", "u"],                 | INSYRI splitlines is split on "\n"see dm yep
            "are": ["are", "r"],                       | yeaaa i tested da code on replit,,
            "got": ["got", "gto", "tog"],              | OHH I USED GG
        },                                             
        lines = string.splitlines()  # splits on "\n"

        formatted_string = "" # empty string
        for line in lines:  # loop for each line in the "lines" var
            words = line.split() # split the line into words (split for each " " character)
            formatted_words = [] #empty array which will store the formatted words later on
            for word in words:  # loop for each word in the "words" var
                new_word = "" #empty string which will store the newly formatted word
                rng = random.randint(1, 30) #literal rng in codde (bad)
                if word in alternatives: #if word is in the alternatives list then
                    formatted_words.append(random.choice(alternatives[word])) # append the newly formatted word to the list of formatted_words (indexes a random value of the corresponding word from the alternatives array)
                    continue # continue ?
                if (len(word) - 1 >= 3) and (rng == 1): # if the length of the word -1 is greater than or equal to 3 and the random number is 1 then
                    formatted_words.append(word) #append the word itself (without any modification)
                    continue # continue i thgink

                for i, letter in enumerate(word): # literally just like "for i,v in pairs(o) do" (loop through something: first var is index, second is value)
                # i checks for the index of the letter in the word, v is the letter itself
                 # idk what letter is is that just each char int he string.,tp.wyyep.A OK
                    if len(word) - 1 > 3: # if the length of the word -1 is over 3 then
                        if i > 0 and i < (len(word) - 1): # if i is over 0 and i is smaller than the length of the word -1 (if i is within the range of the word's length)
                            if word[i + 1].isalpha(): # if alphabetical [A-Z | a-z]
                                if word[i + 1] == letter: # bro what is this ROFL is drum ok LMFAOO
                                    continue
                                if letter in vowels: # ...?
                                    continue

                    if i == 0: # if index is at 0
                        rng = random.randint(1, 50) # rng
                        if rng == 1: # if random nuymber is 1
                            new_word += letter * 2 # new word will become a typo basically (so like "hello" -> "hhello")

                    if i == (len(word) - 1): # if index is the size of the word basically
                        rng = random.randint(1, 50) # rng
                        if rng == 1: # if random number is 1
                            new_word += letter * 2 # new word will become a typo basically (so like "hello" -> "helloo")

                    new_word += letter # concatenate the new word with the new letter
                formatted_words.append(new_word) # add the word to the word list
            formatted_string += f"{' '.join(formatted_words)}\n" # format

            await self.client.send_message(message.channel, formatted_string) #send