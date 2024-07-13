import clipboard

# json 작성의 편의를 위한 코드입니다.
# 그냥 텍스트를 'toconv.txt'에 입력하면 한 줄로 정제해 클립보드에 복사해 줍니다.

def clean_text(text: str):
    text = text.replace('"', "\"")
    return text

with open("toconv.txt", encoding="utf-8") as f:
    t = f.read()
    converted = '\\n'.join([clean_text(_) for _ in t.split('\n')])
    print(converted)
    clipboard.copy(converted)