response = input("What is the number? ")
new_response = int(response)
# print(new_response)
for i in range(0, new_response - 1):
    i += 1
    if i % 2 == 1:
        print("%s is odd" % i)
    else:
        print("%s is even" % i)
